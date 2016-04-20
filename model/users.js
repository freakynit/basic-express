// User Model


// Dummy users data genearted from www.json-generator.com
// dummy data can be accessed from www.json-generator.com/api/json/get/cbVyJWWPIi?indent=2
var users=[
  {
    "index": 0,
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
    "index": 1,
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
    "index": 2,
    "picture": "http://placehold.it/32x32",
    "gender": "female",
    "age": 40,
    "names": {
      "last": "Pace",
      "first": "Kitty"
    },
    "_id": "57173011a11308ccd7998ed0",
    "isActive": true
  },
  {
    "index": 3,
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
    "index": 4,
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
    "index": 5,
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

// Get all users
exports.all = function(user, cb) {
  return users;
}
