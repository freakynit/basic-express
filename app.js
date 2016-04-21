var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , port = process.env.PORT || 3000
  , db = require('./model/db');


app.set('views', __dirname + '/views')
app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//middelware to load controllers
app.use(require('./controllers'))

db.connect('mongodb://developer:bridgeit@ds013908.mongolab.com:13908/sp',function(){
    //callback when connect success
});

db.get().connection.on('connected', function () {
  console.log('Mongoose connected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  db.get().connection.close(function () {
    console.log('Mongoose connection disconnected through app termination');
    process.exit(0);
  });
});
