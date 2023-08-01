const express = require("express");
const bodyParser = require("body-parser");

const App = express();
App.use(bodyParser.urlencoded({ extended: true }));

App.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

App.get("/about", (req, res) => res.sendFile("Hi welcome to devtown "));

App.post("/", function(req, res) {
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;
  res.send("The result of your calculation is " + result);
});

App.listen(8000, function() {
  console.log("The server started on the port 8000");
});

