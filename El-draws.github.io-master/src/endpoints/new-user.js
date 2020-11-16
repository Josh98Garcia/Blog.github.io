const templates = require('../templates');

/** @function newPost 
 * Serves the form for creating a new user 
 * @param {http.IncomingMessage} req - the request object 
 * @param {http.ServerResponse} res - the response object
 */
function newUser(req, res) {
  var form = templates["signup.html"]({
    errorMessage: ""
  });
  var html = templates["layout.html"]({
    title: "Sign Up",
    post: form,
    list: "",
    user: req.session && req.session.user
  });
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Length", html.length);
  res.end(html);
}

module.exports = newUser;