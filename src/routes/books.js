'use strict';

const Router = require('@koa/router');
const router = new Router();

router.get('/api/books', async (ctx) => {
  const books = [
    'Speaking Javascript', 
    'Think Python', 
    'The Coding Interview', 
    'Data Structures and Algorithms in Java'
  ];

  ctx.response.body = books;
  ctx.response.status = 200;
});

module.exports = router;
