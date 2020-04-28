var path = require("path");

// html routes
module.exports = function (app) {

    // ??Why is the route /../ ??
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
};