import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import { resolve } from "path";
export default defineConfig({
  plugins: [
    // Babel will try to pick up Babel config files (.babelrc or .babelrc.json)
    babel(),
  ],

  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "dommy/index.ts"),
      name: "Dommy",
      // the proper extensions will be added
      fileName: "dommy",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
    },
  },
});
