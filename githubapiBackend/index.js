const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const { gitHub  , getSingleUserFromGithub} = require('./controller/gitHub.controller');
const port = 3001;


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));


app.get("/github" , gitHub)
app.post("/single" , getSingleUserFromGithub)
app.listen(port , ()=>{
    console.log("Server Live at port " + port);
})