var express = require('express');
var router = express.Router();


router.get('/', function(req, res){

	res.render('index');
});

router.get('/register', function(req, res) {
	res.render('register');

});

router.get('/aboutUs', function(req, res) {
	res.render('aboutUs');
})


module.exports = router;