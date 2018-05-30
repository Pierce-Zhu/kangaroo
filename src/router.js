module.exports = (app) => {
    return {
        'get /': app.controller.index.getHome,
        'get /getString': app.controller.index.getString,
    }
}