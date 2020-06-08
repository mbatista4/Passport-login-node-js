const express = require('express');
const router = express.Router();
const {
    ensureAuthenticated
} = require('../config/auth');

// Welcome Page
router.get('/', (req, res) => {
    res.render('homepage');
});

//Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {
        name: req.user.name
    });
});

router.get('/', (req, res) => {
    res.render('homepage');
});


module.exports = router;