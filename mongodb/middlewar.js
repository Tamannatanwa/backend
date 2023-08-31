module.exports = reqFilter = (req,resp,next)=>{
    if (!req.query.age){
        resp.send("please provide age")
    }
    else if (req.query.age<18){
        resp.send("you can not access this page")
    }
    else{
        next();
    }
}