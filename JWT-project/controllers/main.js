const CustomAPIError = require("../errors/custom-error");

const login = async(req,res)=>{

    const {username,password}= req.body;
// mongoose validation
// joi
// checkin the controllers
    if(!password || !username){
        throw new CustomAPIError("Please provide Both email and password",400);
        

    }
    res.send("Login/Register route")
}

const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg:`Hello John Doe`,secret:`Here is your authorized data, your Luck number is ${luckyNumber}`})
    
}

module.exports ={
    login,dashboard
}