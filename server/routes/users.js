var express = require('express');
var router = express.Router();

const translateResponse = require('../util/translateResponse')
/* GET users listing. */
router.get('/', function(req, res, next) {
    translateResponse(req, res,'user.json');
});

module.exports = router;
