function success(res, data, message, status) {
    const code = status || 200;

    res.status(code).json({
        message: message,
        data: data
    });
}

function errorServer(res, message, status, error) {
    const code = status || 500;

    res.status(code).json({
        message: message,
        error: error
    })
}

function errorClient(res, message, status) {
    const code = status || 400;

    res.status(code).json({
        message: message
    });
}

module.exports = {
    success: success,
    errorServer: errorServer,
    errorClient: errorClient
};