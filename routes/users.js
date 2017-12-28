const express = require('express');
const router = express.Router();

// register
router.get('/register', (req, res, next) => {
    res.send('register');
});

// authenticate
router.get('/authenticate', (req, res, next) => {
    res.send('authenticate');
});

// profile
router.get('/profile', (req, res, next) => {
    res.send('profile');
});

// validate
router.get('/validate', (req, res, next) => {
    res.send('validate');
});

module.exports = router;