import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => ({
  // Served from the custom domain (see CNAME) at the site root, not from
  // a /The-SMUGGLE/ GitHub Pages project path.
  base: "/",
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
