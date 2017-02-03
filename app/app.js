var express = require('express');
var app = express();

app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs'); //set up the view engine
app.set('views', 'app/views'); //specify the views path

app.use(express.static('app/public')); //set up the public folder to be visited by the server and client
app.use(require('./routes/index'));

// var sever = app.listen(3000, function(){
// 	console.log('Listening on port 3000');
// });
var server = app.listen(app.get('port'), function(){
	console.log('Listening on port ' + app.get('port'));
});	