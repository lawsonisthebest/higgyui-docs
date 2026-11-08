# HiggyUI Docs

The website, installation and styling guides, and live component reference for [HiggyUI](https://github.com/lawsonisthebest/higgyui).

[Open the published docs](https://lawsonisthebest.github.io/higgyui-docs/).

## Run from Git

Use Node.js 24 and clone both repositories in the layout below. The docs app links to the library at `../../higgyui`.

```sh
git clone https://github.com/lawsonisthebest/higgyui.git
git clone https://github.com/lawsonisthebest/higgyui-docs.git higgyui-docs/higgyui
cd higgyui
npm ci
cd ../higgyui-docs/higgyui
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). To rebuild the library as you edit it, use `npm run dev:local`.

`npm run build` builds the production site and packages the downloadable library. Use `npm start` to serve the production build locally.

## GitHub Pages

The [Pages workflow](.github/workflows/pages.yml) builds and deploys the docs on pushes to `main`. It checks out a pinned HiggyUI commit. To publish docs against a newer library build, update the library checkout's `ref` in the workflow.

The workflow sets `PAGES_BASE_PATH` and `PAGES_ORIGIN` from GitHub Pages. Setting `PAGES_BASE_PATH` (even to an empty string) enables static export into `out/`. Search uses a prebuilt index, and the package download is generated during the build.

Guides and references live in `content/docs`. Live examples live in `src/components/previews`.
