import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import { resolve } from "path";
import dts from 'vite-plugin-dts';
export default defineConfig({
  plugins: [
    // Babel will try to pick up Babel config files (.babelrc or .babelrc.json)
    dts({ include: ['./dommy']}
      ),
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
    
  },
});
