var mysql = require("mysql");
var inquirer = require("inquirer");
// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    startApp();
});



function startApp() {
    inquirer.prompt([
        {
            type: "input",
            name: "purchase",
            message: "ID of the Product you would like to buy?",
        }

    ]).then(function (val) {
        if (val.purchase) {
            howMany(val.purchase);
        } else {
            console.log(" Stop being an asshole and enter a number");
        }
    });
}
function howMany(itemNum) {
    inquirer.prompt([
        {
            type: "input",
            name: "quantity",
            message: "How many would you like to buy?",
        }

    ]).then(function (val) {
        if (val.quantity) {
            update(itemNum, val.quantity);
        } else {
            console.log(" Stop being an asshole and enter a number");
        }
    });
}
function update(itemNum, quantity){
    connection.query("SELECT * FROM products WHERE item_id = ?",itemNum, function(err, results) {
        if (err) throw err;
        console.log(results)
        //if quantity is less then results then
        if(quantity < results){

        }
})
}