var connection = require("./connection.js");

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM table";
    connection.query(queryString, [table], function(err, data) {
        console.log(data);
        cb(data);
    })
  },
  insertOne: function(table, col, val, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (??)";
    connection.query(queryString, [table, cols, vals], function(err, data) {
      console.log(data);
      cb(data);
    })
  },
  updateOne: function(table, objVals, condition, cb) {
    var queryString = "UPDATE " + table + " SET " + objVals + " WHERE " + condition;

    console.log(queryString);
    connection.query(queryString, function(err, data) {
      if(err) throw err;
      console.log(data);
      cb(data);
    })
  }
};

module.exports = orm;
