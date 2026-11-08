import { createMDX } from 'fumadocs-mdx/next';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const withMDX = createMDX();
const projectDir = path.dirname(fileURLToPath(import.meta.url));
const projectsRoot = path.resolve(projectDir, '../..');
const reactPath = './' + path.relative(projectsRoot, path.join(projectDir, 'node_modules')).split(path.sep).join('/');
const pagesBuild = process.env.PAGES_BASE_PATH !== undefined;
const basePath = process.env.PAGES_BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ['higgyui'],
  outputFileTracingRoot: projectsRoot,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(pagesBuild
    ? { output: 'export', trailingSlash: true, images: { unoptimized: true } }
    : { pageExtensions: ['server.ts', 'tsx', 'ts', 'jsx', 'js'] }),
  turbopack: {
    root: projectsRoot,
    // Linked packages must use the application's React installation.
    resolveAlias: {
      react: reactPath + '/react',
      'react-dom': reactPath + '/react-dom',
    },
  },
};

export default withMDX(config);
