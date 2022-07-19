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
      precompress: null,
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
  appDir: 'internal',
};

export default config;
