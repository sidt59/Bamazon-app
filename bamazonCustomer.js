var mySQL = require('mysql');

// connection credentials and...other...stuff?
var connection = mySQL.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1337t34g59',
    database: 'bamazon'   
});

// let me know if you connect
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
  });