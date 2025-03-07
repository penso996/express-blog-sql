// Imoprting express
const express = require("express");
const app = express();
const port = 3000;


// Defined Home route
app.get("/", (req, res) => {
    res.send("Homepage");
});

// Importing posts routers
const postsRouter = require("./routers/postsRouters.js");
// Defined /posts route
app.use("/posts", postsRouter);


// Importing 404 error handling
const notFound = require("./middlewares/notFound.js");
// Defined 404 error handling behaviour
app.use(notFound);

// Importing 500 error handling
const errorsHandler = require("./middlewares/errorsHandler.js");
// Defined 500 error handling behaviour
app.use(errorsHandler);


// Starting server on specified port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});