const Model = require ('../model/guestModel.js')
console.log('controller!!');
const nodemailer = require('nodemailer');
class GuestController {

  static verifyForm(req, res, next) {
    console.log('verifyForm');
    let formInfo = req.body
    console.log(formInfo);


    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'witkampguitarlessons@gmail.com', // generated ethereal user
            pass: 'iloverocknroll' // generated ethereal password
        },
        tls:{
          rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: `${formInfo.email}`, // sender address
        to: 'witkampguitarlessons@gmail.com', // list of receivers
        subject: `New student inquery from ${formInfo.name}`, // Subject line
        text: `${formInfo.message}`, // plain text body
        html: `
          <h1>Potential New Student</h1>
          <h4>Name: ${formInfo.name}</h2>
          <h4>Email: ${formInfo.email}</h2>
          <h4>Phone Number: ${formInfo.phone}</h4>
          <p>Message: ${formInfo.message}</p>

        ` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);

        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.status(200).json({info})
    });

      let mailOptionsUser = {
        from: `${formInfo.email}`, // sender address
        to:`${formInfo.email}` , // list of receivers
        subject: `Guitar lessons`, // Subject line
        text: ` text feild ${formInfo.message}`, // plain text body
        html: `
          <h1>Hello ${formInfo.name}!</h1>
          <h3>Thanks for your interest in guitar lessons with me!</h3>
          <p>I will reach out shortly to setup your first lesson or answer your questions. <br></br>Sincerly, <br></br>Paul</p>
        `
      };
      transporter.sendMail(mailOptionsUser, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);

          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
          res.status(200).json({info})
      });

  }





}


module.exports = GuestController
