const authorize = (req,res,next)=>{

    const {user} = req.query;

    if(user ==="john"){
        req.user = {name: "john", id: 1}
        next()

    }else{
        res.status(401).send("You're UnAuthorized")
    }
    console.log("Authorize")
}

module.exports = authorize;