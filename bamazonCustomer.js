var mySQL = require('mysql');
var inquirer = require('inquirer');

// connection credentials and...other...stuff?
var connection = mySQL.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1337t34g59',
    database: 'bamazon'   
});

// connection test
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    showStuff();
  });

// display stuff from bamazon database
function showStuff() {
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        console.table(res);
        questionFirst();
    })
}

// how many products to buy
function questionFirst() {
    inquirer
        .prompt([
            {
            /* Pass your questions in here */
            type: 'input',
            name: 'item_id',
            message: 'What is the ID of the item you would like to buy?'
            },
            {
            type: 'input',
			name: 'quantity',
            message: 'How many do you need?'
            }
        ])
        .then(function(answer) {
            // how tf do i do this?
            var query = "SELECT item_id FROM products WHERE ?";
                // error here...somewhere...
                connection.query(query, { item_id: item }, function(err, res) {
                    console.log(res);
                })
            });
    connection.end();
}

// "How many units would you like to buy?"