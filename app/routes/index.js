var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var newContact = require('../../atom');
// var request = require('request');


router.use(bodyParser.json()); //support json encoded bodies
router.use(bodyParser.urlencoded({extended: true})); //support encoded bodies

router.get('/', function(req, res){

	res.render('index');
});

router.get('/register', function(req, res) {
	res.render('register');

});

router.get('/aboutUs', function(req, res) {
	res.render('aboutUs');
})

router.post('/register', function(req, res) {
	var firstName = req.body.givenName;
	var lastName = req.body.familyName;
	var email = req.body.email;
	var tel	= req.body.phoneNumber;
	var atomBody = newContact(firstName, lastName, email);

	var options ={
		url: 'https://www.google.com/m8/feeds/contacts/default/full/' ,
		headers: {
    		'GData-Version': '3.0',
    		'Content-Type': 'application/atom+xml'
  		},
  		method: 'POST'
	};

	console.log(atomBody);
	// res.send("Hello, "+firstName+" "+lastName+", "+"your email is "+email+" and your phone number is "+tel);
	res.send(atomBody);
})

module.exports = router;