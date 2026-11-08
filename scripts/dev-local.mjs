import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const docs = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const library = path.resolve(docs, '../../higgyui');
const cli = path.join(library, 'node_modules/concurrently/dist/bin/index.js');
const child = spawn(process.execPath, [cli, '-k', '--names', 'ui,docs',
  'npm --prefix "' + library + '" run dev:lib',
  '"' + process.execPath + '" "' + path.join(docs, 'node_modules/next/dist/bin/next') + '" dev'], { cwd: docs, stdio: 'inherit' });
child.on('exit', code => { process.exitCode = code ?? 1; });
