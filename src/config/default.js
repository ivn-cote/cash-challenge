module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'ATM Challenge',
    titleTemplate: 'ATM – %s',
    meta: [
      {
        name: 'description',
        content: 'ATM Challenge',
      },
    ],
  },
};
