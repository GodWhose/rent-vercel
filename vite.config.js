import { defineConfig } from "vite";
import { resolve } from "path";
import { VitePWA as pwa } from "vite-plugin-pwa";
import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pwa({
      strategies: "injectManifest",
      srcDir: "",
      filename: "service-worker.js",
      manifest,
    }),
  ],
  server: {
    port: 80,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        template: resolve(__dirname, "template.html"),
        resDetails: resolve(__dirname, "reservation-details/index.html"),
        resForm: resolve(__dirname, "reservation-form/index.html"),
      },
    },
  },
});
