// Importing express for routing
const express = require("express");
const postsRouter = express.Router();

// Importing controller functions
const postsController = require("../controllers/postsController");

// POSTS CRUD
// index (imported)
postsRouter.get("/", postsController.index);

// show (imported)
postsRouter.get("/:id", postsController.show);

// store (imported)
postsRouter.post("/", postsController.store);

// update (imported)
postsRouter.put("/:id", postsController.update);

// modify (imported)
postsRouter.patch("/:id", postsController.modify);

// destroy (imported)
postsRouter.delete("/:id", postsController.destroy);


// Export router module
module.exports = postsRouter;