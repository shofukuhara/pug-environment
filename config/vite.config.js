import { defineConfig } from "vite";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";
import license from "rollup-plugin-license";

export default defineConfig({
  root: path.resolve(__dirname, "../src"),
  build: {
    outDir: "../dist",
    minify: "terser",
    emptyOutDir: false,
    terserOptions: {
      format: { comments: false }, // コメント削除(js)
      compress: { drop_console: true }, // consoleの削除(js)
    },
    rollupOptions: {
      input: path.resolve(__dirname, "../src/assets/js/index.js"),
      output: {
        // format: "iife",
        entryFileNames: "assets/js/index.js",
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, "../src/assets/images"),
          dest: "assets",
        },
      ],
    }),
    license({
      thirdParty: {
        output: path.join(__dirname, "../dist/assets/js/license.txt"),
        includePrivate: true,
      },
    }),
  ],
  server: {
    open: true,
    host: true,
    port: 1234,
  },
});
