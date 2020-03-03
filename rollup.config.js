import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import globals from "rollup-plugin-node-globals";
import builtins from "rollup-plugin-node-builtins";

function createConfig(format) {
  const dir = format === "module" ? "esm" : format;
  return {
    input: require.resolve("oidc-client/index.js"),
    output: {
      file: `${dir}/index.js`,
      format
    },
    plugins: [
      resolve(),
      builtins(),
      globals(),
      commonjs({ preferBuiltins: false })
    ]
  };
}

export default [createConfig("module"), createConfig("system")];
