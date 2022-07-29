var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // pass view name, and optionally some data in JSON format
  res.render('index', {
    title: 'Welcome to my portfolio!',
    subtitle: 'I am a freelance iOS developer, technical consultant, and open-source contributor.'
  });
});

// export the router objects so that can configure it in app.js
module.exports = router;
