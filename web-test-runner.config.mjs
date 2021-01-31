// import { playwrightLauncher } from '@web/test-runner-playwright';
import styles from 'rollup-plugin-styles';
import litcss from 'rollup-plugin-lit-css';
import postcssPresetEnv from 'postcss-preset-env';
import { fromRollup } from '@web/dev-server-rollup';

const stylesPlugin = fromRollup(styles);
const litcssPlugin = fromRollup(litcss);

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  files: 'test/**/*.test.js',
  nodeResolve: true,

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto',

  /** Confgure bare import resolve plugin */
  // nodeResolve: {
  //   exportConditions: ['browser', 'development']
  // },

  /** Amount of browsers to run concurrently */
  // concurrentBrowsers: 2,

  /** Amount of test files per browser to test concurrently */
  // concurrency: 1,

  /** Browsers to run tests on */
  // browsers: [
  //   playwrightLauncher({ product: 'chromium' }),
  //   playwrightLauncher({ product: 'firefox' }),
  //   playwrightLauncher({ product: 'webkit' }),
  // ],
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
  ],
  // See documentation for all available options
});
