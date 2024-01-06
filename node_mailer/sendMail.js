const nodemailer = require("nodemailer");   //import nodemailer>>>


const sendMail = async(req, res)=>{
    let testAccount = await nodemailer.createTestAccount();   //creating fake test account


    //connect with the smtp
    let transporter =  nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth:{
            user: 'lyric1@ethereal.email', //generate ethereal mail
            pass: 'tA5D4sd7fn7sy4wzvM'   //generate ethereal password
        },
    });
  

let info =  transporter.sendMail({
    from :' "sneha" <lyric1@ethereal.email>',
    to: "snehamenat@gmail.com",
    subject:"hello",
    text:"hello this is fake",
    html: "<b>hello this is fake</b>"
});

console.log("Message send: %s", info.messageId);
res.json(info);
}

module.exports = sendMail;