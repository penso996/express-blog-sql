// Importing express
const express = require("express");
const app = express();
const port = 3000;

// Defined middleware to parse JSON request bodies
app.use(express.json());

// Defined home route
app.get("/", (req, res) => {
    res.send("Homepage");
});


// Starting server on specified port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});