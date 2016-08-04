/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var burger = {
  all: function (cb) {
    orm.all('burgers', function (res) {
      cb(res);
    });
  },
  // cols and vals are arrays
  create: function (cols, vals, cb) {
    orm.create('burgers', cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;