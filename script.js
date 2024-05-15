/*
const shuffle = require('lodash/shuffle');

let array = [8,2,3,4,21,23,22];

array = shuffle(array)

console.log(array);
*/
 /*
const express = require('express');
const app = express()

const port = 3000;

app.get('/', (req,res)=>{
    res.send('Este es un servidor basico de express')
})
app.listen(port, ()=>{
    console.log(`server indiciado http://localhost:${port}`)
})

*/

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "youReallyTHough@gmail.com",
      pass: "zneliqbgy5hvch2qkll3",
    },
  });
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Julio Quintanilla👻" <youReallyThought@gmail.com>', // sender address
    to: "j.william03@hotmail.com , jayquintanilla2@gmail.com", // list of receivers
    subject: ": Implementación de servidor de correos. ✔", // Subject line
    text: "¡Servidor de correo funcionando excelente!", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);