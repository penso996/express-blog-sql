// Defined behaviour for 404
function notFound(req, res, next) {
    res.status(404);
    res.json({
        error: "Not Found",
        message: "Page not found"
    });
}

// Export module for 404 behaviour
module.exports = notFound;