var express = require('express');
var app = express();

var jayz = require('./generator/jayz');
var trump = require('./generator/trump');
var TextMutator = require('textmutator');

var bodyParser = require('body-parser')

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/mutation/trump', function(request, response) {
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

app.get('/mutation/generic', function(request, response) {
    response.render('pages/generic');
});

app.post('/mutation/generic', function(request, response) {
    var text = request.body.inputText;

    if(!text || (text.match(/\s/g) || []).length <= 10) {
      response.render('pages/mutation', {
        error: "We need a longer sample of text to get an output. Try using a speech or lyrics to your favorite song!"
      });
      return;
    }

    var markov = new TextMutator(2);
    markov.ingest(text);
    response.render('pages/mutation', {
        error: false,
        text: markov.generate(100),
        artist: "In your personal style:"
    });
});

app.get('/', function(request, response) {
  	response.render('pages/index');
});

app.listen(app.get('port'), function() {
  	console.log('Node app is running on port', app.get('port'));
});
