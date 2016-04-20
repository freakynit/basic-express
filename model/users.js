// User Model
var util         = require("util");
var EventEmitter = require("events").EventEmitter;

// Dummy users data genearted from www.json-generator.com
// dummy data can be accessed from www.json-generator.com/api/json/get/cbVyJWWPIi?indent=2
var id=1;
var users=[
  {
    "index":id++,
    "picture": "http://placehold.it/32x32",
    "gender": "male",
    "age": 37,
    "names": {
      "last": "Donovan",
      "first": "Cobb"
    },
    "_id": "5717301128077e29f18726f4",
    "isActive": true
  },
  {
    "index": id++,
    "picture": "http://placehold.it/32x32",
    "gender": "male",
    "age": 38,
    "names": {
      "last": "Duke",
      "first": "Foster"
    },
    "_id": "57173011064f0e291e2b0216",
    "isActive": false
  },
  {
    "index": id++,
    "age": 40,
    "names": {
      "last": "Pace",
      "first": "Kitty"
    },
    "_id": "57173011a11308ccd7998ed0",
    "isActive": true
  },
  {
    "index": id++,
    "picture": "http://placehold.it/32x32",
    "gender": "female",
    "age": 27,
    "names": {
      "last": "Acevedo",
      "first": "Haley"
    },
    "_id": "57173011289dde8e376b6b1a",
    "isActive": false
  },
  {
    "index": id++,
    "picture": "http://placehold.it/32x32",
    "gender": "male",
    "age": 39,
    "names": {
      "last": "Acosta",
      "first": "Branch"
    },
    "_id": "571730116ae003303f03a20c",
    "isActive": false
  },
  {
    "index": id++,
    "picture": "http://placehold.it/32x32",
    "gender": "male",
    "age": 40,
    "names": {
      "last": "Hayden",
      "first": "Flynn"
    },
    "_id": "57173011b71abfbed0ef3926",
    "isActive": true
  }
];

//constructor
function UserList () {
    EventEmitter.call(this);

}
util.inherits(UserList, EventEmitter);


//Get all users
UserList.prototype.all = function ()
{
  return users;
};

UserList.prototype.save=function(data)
{
   console.log('Saving user...');
   this.emit("saved-user", data);
}

module.exports = UserList;
