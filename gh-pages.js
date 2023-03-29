var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/ConnorHorn/Svelte-FRC-WebAPP-Test.git',
        user: {
            name: 'ConnorHorn',
            email: 'connorhornet@gmail.com',

        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
)