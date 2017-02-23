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
});

router.get('/event', function(req, res) {
	res.render('event', {
		siteTitle: 'Ezra Fellowship',
		pageTitle: 'Event',
		info: 'The page is coming soon'
	});
});
router.get('/bibleStudy', function(req, res) {
	res.render('bibleStudy', {
		siteTitle: 'Ezra Fellowship',
		pageTitle: 'Event',
		info: 'The page is coming soon'
	});
});
router.get('/devotion', function(req, res) {
	res.render('devotion', {
		siteTitle: 'Ezra Fellowship',
		pageTitle: 'Event',
		info: 'The page is coming soon'
	});
})


module.exports = router;