// Importing data
const database = require("../data/database");

// Function for posts (objects) routing behaviour
// Index function
function index(req, res) {

    const sql = "SELECT * FROM posts";

    // Execute Query
    database.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: "Database query failed" });
        res.json(results);
    });
}

// Show function
function show(req, res) {

    // Filter by ID key in postsData
    const id = parseInt(req.params.id);
    const post = postsData.find(post => post.id === id);

    // If no object in ID position in postsData
    if (!post) {
        // Error 404
        return res.status(404).json({
            error: "Not found",
            message: "Post not found"
        });
    }

    // OR return object found in that position in postsData (in JSON)
    res.json(post);
}

// Store function
function store(req, res) {

    // Retrieve last ID key in postsData
    const lastPostId = postsData[postsData.length - 1];
    // Add 1+ ID OR if postsData is empty set undefined to 1
    const newPostId = lastPostId ? lastPostId.id + 1 : 1;

    // Create new object using data from the request body
    // (!!!NO ERROR IF MISSING DATA!!!)
    const newPost = {
        id: newPostId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    // Add new object to postsData
    postsData.push(newPost);

    // Send 201 status and new object (in JSON)
    res.status(201).json(newPost);

    // DEBUG: updated postsData
    console.log(postsData);
}

// Update function
function update(req, res) {

    // Filter by ID key in postsData
    const id = parseInt(req.params.id);
    const post = postsData.find(post => post.id === id);

    // If no object in ID position
    if (!post) {
        // Error 404
        return res.status(404).json({
            error: "Not found",
            message: "Post not found"
        });
    }

    // If object is found, modify object's properties with data from the request body
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    // Send 200 status and updated object (in JSON)
    res.status(200).json(post);

    // DEBUG: updated postsData
    console.log(postsData);
}

// Modify
function modify(req, res) {

    // Filter by ID key in postsData
    const id = parseInt(req.params.id);
    const post = postsData.find(post => post.id === id);

    // If no object in ID position
    if (!post) {
        // Error 404
        return res.status(404).json({
            error: "Not found",
            message: "Post not found"
        });
    }

    // Modify only object data fields given
    req.body.title ? post.title = req.body.title : post.title = post.title;
    req.body.content ? post.content = req.body.content : post.content = post.content;
    req.body.image ? post.image = req.body.image : post.image = post.image;
    req.body.tags ? post.tags = req.body.tags : post.tags = post.tags;

    // Send 200 status and modified object (in JSON)
    res.status(200).json(post);

    // DEBUG: updated postsData
    console.log(postsData);
}

// Destroy function
function destroy(req, res) {

    // Filter by ID key in postsData
    const id = parseInt(req.params.id);
    const post = postsData.find(post => post.id === id);

    // If no object in ID position
    if (!post) {
        // Error 404
        return res.status(404).json({
            error: "Not found",
            message: "Post not found"
        });
    }

    // OR delete object in ID position
    postsData.splice(postsData.indexOf(post), 1);

    // Send 204 status
    res.sendStatus(204);

    // DEBUG: updated postsData
    console.log(postsData);
}


// Export controller module
module.exports = { index, show, store, update, modify, destroy };