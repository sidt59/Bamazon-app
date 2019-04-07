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
        itemPrompt();
    })
}

// how many products to buy
function itemPrompt() {
    inquirer
        .prompt([
            {
            // Pass your questions in here
            type: 'input',
            name: 'itemID',
            message: 'What is the ID of the item you would like to buy?'
            },
            {
            type: 'input',
			name: 'quantity',
            message: 'How many do you need?'
            }
        ])
        .then(function(answer) {
            // select item from table and checks if theres enough in inventory
            // simple vars?
            var itemNum = answer.itemID;
            var quanAmt = answer.quantity;
            // console.log(itemNum, quanAmt);
            // function to compare ^those values?
            checkInventory(itemNum, quanAmt);
            });
}

function checkInventory(item, amt) {
    // once customer placed order check if inventory exists
        connection.query('Select * FROM products WHERE item_id = ' + item, function(err,res){
        if(err){console.log(err)};
        // fulfill order. update sql database subtract from quantity
		if(amt <= res[0].stock_quantity){
            var totalCost = res[0].price * amt;
            // show total cost of customer purchase
			console.log("Good news your order is in stock!");
			console.log("Your total cost for " + amt + " " +res[0].product_name + " is " + totalCost + " Thank you!");
            // the problem is here you dumbass. inline doesnt work for some reason
			connection.query(
                "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
                [amt, item]
                );
		} else{
            // if store doesnt have enough items then tell cust
			console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + " to complete your order.");
        };
        showStuff();   
    }
)};





// connection.end();


// USELESS. JUST FUCKIN USELESS
/* connection.query("SELECT item_id, stock_quantity FROM products WHERE ?", 
        [{
            item_ID: answer.item_id 
        }], 
        function(err, res) {
            console.log(res);
            if (err) throw err;
        } */


        /* var newStock = (res[i].stock_quantity - userPurchase.inputNumber);
          var purchaseId = (userPurchase.inputId);
          //console.log(newStock);
          // function update(newStock, purchaseId) {
          connection.query("UPDATE products SET ? WHERE ?", [{
            stock_quantity: newStock
          }, {
            item_id: purchaseId
          }]
          ) */