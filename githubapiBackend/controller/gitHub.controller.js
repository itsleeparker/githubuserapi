const { resolve } = require("path");
const { api , getSingleUser } = require("../models/githubApi")

const gitHub = (req , res)=>{
    let data = api();
    data
        .then((response)=>{
            if(response.data){
                console.log(response.data);
                res.json({
                    data : response.data
                })
            }
        })
}

const getSingleUserFromGithub = (req , res)=>{
    let user = req.body.username;
    console.log("Payload " , user);
    if(user == ""){
        res.json({
            data : ""
        })
        return;
    }
    
    try{
        let getuser =  getSingleUser(user);
        getuser
        .then(response=>{
            if(response.data){
                res.json({
                    data : response.data
                })
            }
        })
        .catch(err=>{
            console.log("Error rejected promise " , err);
            
        })
    }catch(err){
        console.log("Error Occured " ,err);
    }
}

module.exports  = {
    gitHub ,
    getSingleUserFromGithub
}