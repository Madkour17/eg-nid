import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";
import babel from "rollup-plugin-babel";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-typescript2";

const extensions = [".js", ".ts"];
export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "es",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      json(),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
      resolve({
        extensions,
      }),
      babel({
        exclude: "node_modules/**",
        extensions,
      }),
    ],
  },
];
