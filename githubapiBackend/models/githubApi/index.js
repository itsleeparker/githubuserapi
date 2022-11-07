const axios = require("axios")

const api = async ()=>{
    let basepath = "https://api.github.com/users"
    let res = await axios.get(basepath , {
        headers : {
            "Authorization"  : "Bearer  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"
        }
    });
    console.log(res);
    return res;
}

const getSingleUser  = async (username)=>{
    let basepath = `https://api.github.com/users/${username}`;
    try{
        return await axios.get(basepath ,{
            headers : {
                "Authorization"  : "Bearer  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"
            }
        })   
    }catch(err){
        return new Error("Error Occured ");
    }
}

module.exports = {
    api ,
    getSingleUser
}