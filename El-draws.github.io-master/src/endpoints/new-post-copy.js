
const templates = require('../templates');

/** @function newPost 
 * Serves the form for creating a new post 
 * @param {http.IncomingMessage} req - the request object 
 * @param {http.ServerResponse} res - the response object
 */
function newPost(req, res) {
  var form = templates["new-post.html"]();
  var html = templates["layout.html"]({
    post: form,
    list: "",
    title: "New Post"})
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", "text/html");
  res.end(html);
}



/*
 * add after 'title: "New Post"'
 * user: req.session && req.session.user
 * remember to add , after "New Post"
 * 
 * module.exports = newPost; for new-post.js
 */