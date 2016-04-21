var mongoose = require('mongoose');

var state = {
  db: null,
}

exports.connect = function(url,cb) {
  if(state.db) return cb();
  state.db=mongoose.connect(url);
  cb();
}

exports.get = function() {
  return state.db
}

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}

// mongoose.connection.on('connected', function () {
//   console.log('Mongoose default connection open to ');
// });
//
// // If the connection throws an error
// mongoose.connection.on('error',function (err) {
//   console.log('Mongoose default connection error: ' + err);
// });
//
// // When the connection is disconnected
// mongoose.connection.on('disconnected', function () {
//   console.log('Mongoose default connection disconnected');
// });
//
// // If the Node process ends, close the Mongoose connection
// process.on('SIGINT', function() {
//   mongoose.connection.close(function () {
//     console.log('Mongoose default connection disconnected through app termination');
//     process.exit(0);
//   });
// });
