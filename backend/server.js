const express = require("express");
const router = require("express").Router();
const cors = require("cors");
const { data } = require("./env.js");
const nodemailer = require("nodemailer");
const Port = 5000;

//server used to send emails

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(Port, () => console.log("Server Running"));
console.log("connected");
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: data.EMAIL,
    pass: data.PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "********@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
