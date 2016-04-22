var mongoose = require('mongoose');

var state = {
  db: null,
}

exports.connect = function(url,cb) {
   if(state.db)
   {
     console.log('db was set');
     cb();
   }
  else {
    state.db=mongoose.connect(url);
    cb();
  }
}
exports.lib=function(){
  return mongoose;
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
