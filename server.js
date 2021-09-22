const express = require("express");
const app = express();
const port = 3000;

app.get("/greetings/:greetings", (req, res) => {
  res.send("Hello" + " " + req.params.greetings);
});

app.get("/tip/:total/:tip", (req, res) => {
  let tip = req.params.tip / 100;
  let amount = req.params.total * tip;
  res.send("Your tip amount is " + amount);
});

app.listen(port, () => {
  console.log("listening on port", port);
});
