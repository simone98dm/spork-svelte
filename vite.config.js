import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/spork/",
  plugins: [svelte()],

  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@use "src/variables.scss" as *;',
      },
    },
  },
});
