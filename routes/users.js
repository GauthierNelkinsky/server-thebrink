var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {

    /**
     * TODO Verify if req.email and req.password exist 
     */

    db.User.findOne({ where: { email: req.query.email, password: req.query.password } }).then(user => res.json({
        error: false,
        data: user
    })).catch(error => res.json({
        error: error,
        data: [],
    }));

    /**
     * Todo Log the latest login timestamp of the user.
     */
});

router.post('/', function(req, res, next) {
    const {
        first_name,
        last_name,
        email,
        password
    } = req.body;

    /**
     * TODO : Check if user doesnt exist already
     */

    db.User.create({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
    })
    .then(user => res.json({
        error: false,
        data: user
    })).catch(error => res.json({
        error: error,
        data: [],
    }));
});

/**
 * For the password reset we should create a PUT route
 * like : router.put(...)
 */

module.exports = router;
