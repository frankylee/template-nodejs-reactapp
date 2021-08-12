'use strict';

const path = require('path');

const Koa = require('koa');
const koaBody = require('koa-bodyparser');
const koaSend = require('koa-send');
const koaStatic = require('koa-static');

const app = new Koa();

const PORT = process.env.PORT || 3001;

// Parse the body
app.use(koaBody());

/**
 * ROUTES
 */
app.use(require('./src/routes/books.js').routes());
app.use(require('./src/routes/books.js').allowedMethods());

// Serve the ReactApp build files
app.use(koaStatic(path.join(__dirname, '/client/build')));

// Catch invalid requests
app.use(async (ctx) => { 
  await koaSend(ctx, '/index.html', { root: path.join(__dirname, '/client/build') });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
