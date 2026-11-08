import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const docs = fileURLToPath(new URL('..', import.meta.url));
const library = path.resolve(docs, '../../higgyui');
const destination = path.join(docs, 'public', 'downloads');
const temporary = mkdtempSync(path.join(tmpdir(), 'higgyui-pack-'));

try {
  const output = execFileSync(process.execPath, [
    process.env.npm_execpath, 'pack', library, '--pack-destination', temporary, '--json',
  ], { encoding: 'utf8' });
  const [{ filename }] = JSON.parse(output);
  mkdirSync(destination, { recursive: true });
  copyFileSync(path.join(temporary, filename), path.join(destination, 'higgyui.tgz'));
} finally {
  rmSync(temporary, { recursive: true, force: true });
}
