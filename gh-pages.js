import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/tmallz/tim-omalley-portfolio.git', // Update to point to your repository
    user: {
      name: "Tim O'Malley", // update to use your name
      email: 'tomalley24@gmail.com', // Update to use your email
    },
    dotfiles: true,
  },
  () => {
    console.log('Deploy Complete!');
  }
);
