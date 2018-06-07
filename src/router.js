module.exports = (app) => {
    return {
        'get /': app.controller.index.getHome,
        'get /getUser': app.controller.index.getUser,
        'get /login': app.controller.index.login,
    }
}