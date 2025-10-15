import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    file: "dist/joko.mjs",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    resolve({
      browser: true,     // 🔹 penting: gunakan versi browser
      preferBuiltins: false
    }),
    commonjs()
  ]
};
