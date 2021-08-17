const express = require("express");
const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set("views", "views")

app.get("/", (req, res) => res.render("home"));
app.get("/cake-duty", (req, res) => res.render("cake-duty"));

app.listen(3000, () => console.log("Up and rolling!"));