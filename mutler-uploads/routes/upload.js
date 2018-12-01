const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.render("upload", {
        title: "Odain's site"
    });
})

module.exports = router;