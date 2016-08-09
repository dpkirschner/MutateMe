var express = require('express');
var app = express();

var jayz = require('./generator/jayz');
var trump = require('./generator/trump');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/mutation/trump', function(request, response) {
	console.log(Object.keys(jayz.library).length);
	console.log(Object.keys(trump.library).length);
  	response.render('pages/mutation',
  		{
  			text: trump.generate(100),
  			artist: "Trump"
  		}
  	);
});

app.get('/mutation/jayz', function(request, response) {
  	response.render('pages/mutation',
  		{
  			text: jayz.generate(100),
  			artist: "JayZ"
  		}
  	);
});

app.get('/', function(request, response) {
  	response.render('pages/index');
});

app.listen(app.get('port'), function() {
  	console.log('Node app is running on port', app.get('port'));
});
