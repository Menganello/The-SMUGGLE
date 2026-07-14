import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const root = dirname(fileURLToPath(import.meta.url));

// `vite preview` reports the same command ("serve") as `vite dev`, so we
// can't branch on `command` to tell them apart. `npm_lifecycle_event` (set
// by npm to the running script's name: "dev" | "build" | "preview") is a
// reliable way to give the dev server "/" while build + preview (which
// serves the already-built /The-SMUGGLE/-prefixed output) share the real
// GitHub Pages base path.
const isDev = process.env.npm_lifecycle_event === "dev";

export default defineConfig(() => ({
  // GitHub Pages project site is served from /The-SMUGGLE/, so the
  // build (and its preview) need that base prefix. Dev server stays at
  // the domain root.
  base: isDev ? "/" : "/The-SMUGGLE/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        safer: resolve(root, "safer/index.html"),
        dona: resolve(root, "dona/index.html"),
        impresa: resolve(root, "impresa/index.html"),
        sponsor: resolve(root, "sponsor/index.html"),
        chiSiamo: resolve(root, "chi-siamo/index.html"),
        faq: resolve(root, "faq/index.html"),
        privacyPolicy: resolve(root, "privacy-policy/index.html"),
        donations: resolve(root, "donations/index.html"),
        donationsClinicalStudy: resolve(root, "donations/clinical-study/index.html"),
        donationsTraversata: resolve(
          root,
          "donations/the-smuggle-realizzare-la-traversata/index.html"
        ),
      },
    },
  },
}));
