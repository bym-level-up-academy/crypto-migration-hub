// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages build: set GITHUB_PAGES=1 and BASE_PATH=/<repo-name>/ (done by the workflow).
const isPages = process.env["GITHUB_PAGES"] === "1";
const base = process.env["BASE_PATH"] || "/";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isPages
      ? {
          pages: [{ path: "/" }],
          prerender: { enabled: true, autoStaticPathsDiscovery: false },
        }
      : {}),
  },
  ...(isPages ? { vite: { base } } : {}),
});
