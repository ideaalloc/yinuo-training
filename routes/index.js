/**
 * Created by Bill Lv (billcc.lv@hotmail.com) on 8/29/15.
 */
var express = require('express');
var request = require('request');
var router = express.Router();
var apiServer = 'http://dakexiaoyuan.com';

/* GET home page. */
router.get('/', function (req, res, next) {
    var holder = {apiServer: apiServer};
    res.render('index', holder);
});

module.exports = router;
