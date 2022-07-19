import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
    }),
  },
  // paths: {
  //   // change below to your repo name
  //   base: dev ? '' : '/tim-omalley-portfolio',
  // },
  target: '#svelte',
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
