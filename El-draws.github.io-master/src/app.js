const express = require('express');
const serveHomepage = require('./endpoints/serve-homepage');
const newPost = require('./endpoints/new-post');
const createPost = require('./endpoints/create-post');
const showPost = require('./endpoints/show-post');
const loadBody = require('./middleware/load-body');
const serveError = require('./serve-error');
const basicAuth = require('./middleware/basic-auth');
const newUser = require('./endpoints/new-user.js');
const createUser = require('./endpoints/create-user');
const newSession = require('./endpoints/new-session');
const createSession = require('./endpoints/create-session');
const authorsOnly = require('./middleware/authors-only');
const loadSession = require('./middleware/load-session.js');
const destroySession = require('./endpoints/destroy-session.js');

/** @module app 
 * The express application for our site
 */
var app = express();

app.use(loadSession);
app.get('/', serveHomepage);
app.get("/signup", newUser);
app.post("/signup", loadBody, createUser);
app.get('/posts/new', authorsOnly, newPost);
app.post("/signin", loadBody, createSession);
app.get('/signin', newSession);
app.post('/posts', authorsOnly, loadBody, createPost);
app.get('/posts/:id', showPost);
app.get("/signout", destroySession);

app.use(express.static('public'));

module.exports = app;