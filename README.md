<p align="center">
  <a href="https://github.com/brandonxiang/vite-antd-mobile-starter">
    <img src="https://brandonxiang.top/icon/vite-template.jpeg" width="150px" alt="Vite Template Logo" />
  </a>
</p>

# Vite Antd Mobile Starter

## Tech Stack

- [React](https://react.dev/) 19
- [React Router](https://reactrouter.com/en/main) 7
- [antd-mobile](https://mobile.ant.design/) 5
- [Vite+](https://viteplus.dev/) - The Unified Toolchain for the Web
- [TypeScript](https://www.typescriptlang.org/)

## Why Vite+

Vite+ is a unified toolchain built on top of Vite, providing:

- **One CLI** - All frontend tools in one command: `vp dev`, `vp build`, `vp test`, `vp lint`, `vp fmt`
- **Rust-powered** - Built with Rolldown, Oxc for blazing fast performance
- **Built-in testing** - Vitest integrated out of the box
- **Type-aware linting** - Oxlint with full TypeScript support

## Quick Start

```bash
# Install dependencies
vp install

# Development
vp dev

# Build
vp build

# Lint & Format
vp check
```

Or with bun:

```bash
bun install
bun run dev
bun run build
```

## Project Structure

```
src/
├── components/      # Reusable components
├── pages/           # Page components
├── router/          # Route configuration
│   ├── index.tsx   # Router setup
│   └── routes.tsx  # Route definitions
├── layout/          # Layout components
├── App.tsx
└── main.tsx
```

## Commands

| Command | Description |
|---------|-------------|
| `vp dev` | Start dev server |
| `vp build` | Build for production |
| `vp preview` | Preview production build |
| `vp test` | Run tests |
| `vp lint` | Lint code |
| `vp fmt` | Format code |
| `vp check` | Run format, lint, and type checks |

## License

MIT
