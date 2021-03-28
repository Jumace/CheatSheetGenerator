# Getting started

In a terminal you need to build the project:

```bash
npm run build
```

Afterwards you can start the server with:

```bash
npm run start
```

# Development

If you want to develop a new sheet/theme use the watcher:

```batch
npm run watch
```

## Develop a new theme

> If you are only working on a theme there is not need to start the watcher.

First step to develop a new theme is to copy an existing one, e.g. `violett-dark`.

On top of the CSS file you find some CSS variables, use those the adapt the whole theme fast.

All CSS classes that are starting with `hljs` are used for [code formatting](https://github.com/highlightjs/highlight.js/blob/HEAD/docs/css-classes-reference.rst#language-names-and-aliases).