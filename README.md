# `@tanstack/solid-router` `<Link>`: `STRICT_READ_UNTRACKED` warnings

Minimal TanStack Start (Solid 2) app. `<Link>` receives its options through a spread of a value read from a `<For>` item:

```tsx
<For each={items}>{item => <Link {...item.linkOptions}>{item.label}</Link>}</For>
```

([`src/routes/__root.tsx`](src/routes/__root.tsx))

## Reproduce

```sh
pnpm install
pnpm dev
```

Open the printed local URL and check the browser console. The `<Link>` logs:

```
[STRICT_READ_UNTRACKED] Reactive value "merge" read directly in <Link> will not update. ...
[STRICT_READ_UNTRACKED] Reactive value "merge" read directly in an effect callback will not update. ...
```

Versions: `@tanstack/solid-router` and `@tanstack/solid-start` 2.0.0-rc.10, `solid-js` / `@solidjs/web` 2.0.0-rc.21,
`vite-plugin-solid` 3.0.0-next.27, Vite 8.3.6.

A `<Link>` outside `<For>` (spreading a plain object) logs nothing.
