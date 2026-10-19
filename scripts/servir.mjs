/* Servidor estático local da UC9. Sem dependências externas. */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { networkInterfaces } from 'node:os';

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PORTA = Number(process.env.PORTA ?? 4321);
const PORTA_FIXA = process.env.PORTA != null;
const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.py': 'text/plain; charset=utf-8',
  '.md': 'text/plain; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.zip': 'application/zip',
};

function enderecoDeRede() {
  for (const interfaces of Object.values(networkInterfaces())) {
    for (const item of interfaces ?? []) {
      if (item.family === 'IPv4' && !item.internal) return item.address;
    }
  }
  return null;
}

function dentroDaRaiz(caminho) {
  return caminho === RAIZ || caminho.startsWith(RAIZ + sep);
}

const servidor = createServer(async (req, res) => {
  try {
    let caminho = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (['/lessons', '/lessons/', '/lessons/index.html'].includes(caminho)) {
      res.writeHead(302, { location: '/', 'cache-control': 'no-store' }).end();
      return;
    }
    if (caminho === '/') caminho = '/index.html';
    if (caminho.endsWith('/')) caminho += 'index.html';

    const alvo = resolve(RAIZ, caminho.replace(/^\/+/, ''));
    if (!dentroDaRaiz(alvo)) {
      res.writeHead(403, { 'content-type': 'text/plain; charset=utf-8' }).end('403 — acesso negado');
      return;
    }
    const info = await stat(alvo).catch(() => null);
    if (!info || info.isDirectory()) {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('404 — não encontrado');
      return;
    }
    res.writeHead(200, {
      'content-type': TIPOS[extname(alvo).toLowerCase()] ?? 'application/octet-stream',
      'cache-control': 'no-cache',
      'x-content-type-options': 'nosniff',
    });
    res.end(await readFile(alvo));
  } catch {
    res.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' }).end('500 — erro interno');
  }
});

let portaTentada = PORTA;
let tentativas = 0;
servidor.on('error', erro => {
  if (erro.code === 'EADDRINUSE' && !PORTA_FIXA && tentativas < 20) {
    tentativas += 1;
    portaTentada = PORTA + tentativas;
    console.log(`  Porta ${portaTentada - 1} ocupada; tentando ${portaTentada}...`);
    servidor.listen(portaTentada);
    return;
  }
  throw erro;
});

servidor.on('listening', () => {
  const rede = enderecoDeRede();
  const portaAtiva = servidor.address().port;
  console.log('\n  Material UC9 servido:');
  console.log(`    http://localhost:${portaAtiva}/`);
  if (rede) console.log(`    http://${rede}:${portaAtiva}/   (dispositivos na mesma rede)`);
  console.log('\n  Ctrl+C para parar.\n');
});

servidor.listen(portaTentada);
