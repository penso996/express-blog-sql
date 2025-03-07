// Defined behaviour for 500
function errorsHandler(err, req, res, next) {
    res.status(500)
    res.json({
        error: err.message,
    });
}

// Export module for 500 behaviour
module.exports = errorsHandler;