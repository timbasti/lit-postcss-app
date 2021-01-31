// import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';
import styles from 'rollup-plugin-styles';
import litcss from 'rollup-plugin-lit-css';
import postcssPresetEnv from 'postcss-preset-env';
import { fromRollup } from '@web/dev-server-rollup';

const stylesPlugin = fromRollup(styles);
const litcssPlugin = fromRollup(litcss);

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  nodeResolve: true,
  open: '/',
  watch: !hmr,

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto'

  /** Set appIndex to enable SPA routing */
  // appIndex: 'demo/index.html',

  /** Confgure bare import resolve plugin */
  // nodeResolve: {
  //   exportConditions: ['browser', 'development']
  // },
  mimeTypes: {
    // serve .module.css files as js
    '**/*.css': 'js',
  },
  plugins: [
    stylesPlugin({
      mode: 'emit',
      plugins: [postcssPresetEnv({ stage: 0 })],
    }),
    litcssPlugin(),
    /** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
    // hmr && hmrPlugin({ exclude: ['**/*/node_modules/**/*'], presets: [presets.litElement] }),
  ],

  // See documentation for all available options
});
