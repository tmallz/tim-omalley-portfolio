import adapter from 'svelte-adapter-github';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      domain: null,
      jekyll: false,
      fallback: null,
      precompress: false,
    }),
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  paths: {
    base: dev ? '' : '/tim-omalley-portfolio',
  },
  // If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
  // For example, instead of '_app', use 'app_', 'internal', etc.
  appDir: 'internal',
};

export default config;
