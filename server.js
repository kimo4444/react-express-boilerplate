const express = require('express');
const app =  express();
const path  = require('path');
const publicPath = path.join(__dirname, '.', 'public');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const bodyParser = require('body-parser');



app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());


app.post('/send', (req,res) =>{
       const emailBody = `
          <p>
          <h3>New customer email!</h3>
            <ul>
              <li>Email: ${req.body.email}</li>
              <li>Name: ${req.body.name}</li>
              <li>Message: ${req.body.message}</li>
            </ul>
          </p>
       `;
       let transporter = nodemailer.createTransport({
              host: 'smtp.gmail.com',
              port: 587,
              secure: false, // true for 465, false for other ports
              auth: {
                  user: process.env.EMAIL,
                  pass:  process.env.PASS
              }
          });


          let mailOptions = {
              from: process.env.EMAIL,
              // '"customer" b2bpattern@gmail.com'
              to: process.env.EMAIL,
              subject: 'New email',
              text: 'new email',
              html: emailBody
          };

          transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                  return console.log(error);
              }
          });
       res.redirect('/')

      })


app.get('*', (req,res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});


app.listen(process.env.PORT || 3000, () => {
  console.log('running');
});
