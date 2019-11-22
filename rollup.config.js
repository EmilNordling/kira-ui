import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
const { getBabelConfig } = require('ve-react-cli');

function findAndReplace(searchIn, find, replace) {
  const index = searchIn.findIndex(plugin => plugin === find);

  if (!index) return;

  if (replace) {
    searchIn[index] = replace;
  } else {
    searchIn.splice(index, 1);
  }
}

const babelConfig = getBabelConfig();
findAndReplace(babelConfig.plugins, 'react-hot-loader/babel');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/lib/index.ts',
  external: Object.keys(pkg.peerDependencies),
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      ...babelConfig,
      runtimeHelpers: true,
      extensions,
    }),
  ],
  output: [{
    file: pkg.main,
    format: 'cjs',
    exports: 'named',
  }, {
    file: pkg.module,
    format: 'es',
    exports: 'named',
  }],
};