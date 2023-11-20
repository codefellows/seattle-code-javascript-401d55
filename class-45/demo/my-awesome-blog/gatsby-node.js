const path = require('path');
// This file can do node things before the web site is generated

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  // this runs and can create a new html page, for every article
  const db = {
    articles: [
      {
        title: 'My-first-Article',
        text: 'I love writing'
      },
      {
        title: 'Article-2',
        text: 'I still love writing'
      }
    ]
  }

  db.articles.forEach((article) => {
    createPage({
      path: article.title,
      component: path.resolve('src/templates/article.js'),
      context: article
    });
  });
}