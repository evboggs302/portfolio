require("dotenv").config();
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const { SERVER_PORT, EMAIL, EMAIL_PASSWORD } = process.env;

app.use(express.json());
// app.use(express.static(__dirname + "/../build"));

// NODEMAILER EndPoints
app.post("/api/send", (req, res, next) => {
  const { name, email, title, message } = req.body.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: EMAIL_PASSWORD
    }
  });
  const mailOptions = {
    from: `${EMAIL}`,
    to: `${email}`,
    subject: `${title} by ${name}`,
    text: `${message}`,
    replyTo: ``
  };
  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.error("there was an error: ", err);
    } else {
      console.log("here is the res: ", res);
    }
  });
});

// Becasue of browser router, you need the below lines.
// const path = require("path");
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/../build/index.html"));
// });

app.listen(SERVER_PORT, () => console.log(`SERVER on 💩 port: ${SERVER_PORT}`));
