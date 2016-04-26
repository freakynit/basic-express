var express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , port = process.env.PORT || 3000
    , db = require('./app/model/db')
    , logger=require('./app/helpers/logger')


app.set('views', __dirname + 'app/views')
app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//middelware to load controllers
app.use(require('./app/controllers'))

db.connect(function () {
    //callback when connect success
    app.listen(port);
});

db.get().connection.on('connected', function () {
    logger.info('Mongoose connected');

});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
    db.get().connection.close(function () {
        logger.info('Mongoose connection disconnected through app termination');
        process.exit(0);
    });
});
