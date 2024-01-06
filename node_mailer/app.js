
const express = require("express")  //called express
const app = express();   //create obj named app
const PORT = 5000;   //defined portNumber
const sendMail = require("./sendMail")  //imported sendMail file info


app.get("/", (req, res)=>{
    res.send("I am server..");
});      //during main page

try{
app.get("/mail", sendMail);   //when mail page is opened
}catch{
    console.log("error");
}

const start = async()=>{
    try{
        app.listen(PORT, ()=>{
            console.log(`I am live in ${PORT}`)
        });

    }catch{error}

};



start();