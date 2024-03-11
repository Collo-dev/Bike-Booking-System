const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(express.static('public'));
 app.use(express.urlencoded({ extended: false }));
 app.use(bodyParser.json());

app.set("view engine", "ejs")

//database connection


app.get("/", (req, res)=>{
    res.render("collo.ejs")


})

app.listen(3000, () =>{
    console.log("Server listening for request")
})