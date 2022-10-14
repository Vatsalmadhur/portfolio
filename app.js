const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require('path')
require("./db/conn");
const register = require("./models/registers")
const {json} = require("express");

const static_path = path.join(__dirname,"../public");
// console.log(path.join(__dirname,"../public"));
app.use(express.static(static_path));

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

app.get("/",(req,res)=>{
    res.render("register")
})

app.post("/",async(req,res)=>{
    try{
        const details = new register({
            name:req.body.name,
            email:req.body.email, 
            message:req.body.textarea,
            
            
        })
        const registered = await details.save();
        console.log(req.body);
        res.status(201);
        
        res.redirect('/');
        return

    }
    catch(error){
        res.status(400).send(error)
    }
})
