const express = require("express");
const app = express();
const port = 3000;

// app.get("/:indexOfPlantsArray", (req, res) => {
//   //req.params. object for indexOfPlantsArray
//   res.send(plants[req.params.indexOfPlantsArray]);
// });
app.get("/greetings/:greetings", (req, res) => {
  res.send("Hello" + " " + req.params.greetings);
});

app.listen(port, () => {
  console.log("listening on port", port);
});
