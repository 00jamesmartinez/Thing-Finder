const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const data = require('./data');


app.use('/products',(req,res,next)=>{
    const filters=req.query;
    const filteredProduct=data.filter(product=>
        {
            let isValid=true;
            for(key in filters)
            {
                isValid= isValid && product[key] === filters[key]
            }
            return isValid;
        })
        res.send(filteredProduct);
})


app.listen(3000,() => {
    console.log("Started on PORT 3000");
    })