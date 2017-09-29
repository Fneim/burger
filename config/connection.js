var mysql = require("mysql");

var connection = mysql.createConnection({
  host:"localhost",
  port:3306,
  user:"root",
  password:"@NeimPrince13",
  database:"burgers_db"
});

connection.connect(function(err, res) {
  if(err) throw err;
  console.log("connected at id : "  + connection.threadId);
})

module.exports = connection;
