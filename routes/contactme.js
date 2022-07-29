// create a reouter object
const express = require("express");
const router = express.Router();

// register middleware functions
router.get("/", (req, res, next) => {
    // pass view name, and optionally some data in JSON format
    res.render("contactme", {
    title: "Contact Me"
    });
});
// export the router objects so that can configure it in app.js
module.exports = router;