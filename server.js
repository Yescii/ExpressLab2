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

let qoute = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic/:trick", (req, res) => {
  let rndmNum = Math.floor(Math.random() * (qoute.length - 1) + 1);
  let input = String(req.params.trick);

  if (input == "Will I Be A Millionaire") {
    res.send(`<h1>${qoute[rndmNum]} </h1>`);
  }
});

app.listen(port, () => {
  console.log("listening on port", port);
});
