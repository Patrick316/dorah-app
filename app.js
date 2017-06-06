var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var nodemailer = require('nodemailer');
var port = process.env.PORT || 3001;
var app = express();

//API Data set up
app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride('X-HTTP-Method-Override'));

function sendDataToAdmin(data) {

  console.log("let's format.");
  console.log(data);

  // var user = {
  //   fname: data.firstname,
  //   lname: data.lastname,
  // }

    // create reusable transporter object using the default SMTP transport
    // var transporter = nodemailer.createTransport({
    //     host: 'smtp.example.com',
    //     port: 465,
    //     secure: true, // secure:true for port 465, secure:false for port 587
    //     auth: {
    //         user: 'ptumulty923@gmail.com',
    //         pass: '#!Getout65'
    //     }
    // });

    // setup email data with unicode symbols
    // var mailOptions = {
    //     from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
    //     to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    //     subject: 'Hello ✔', // Subject line
    //     text: 'Hello world ?', // plain text body
    //     html: '<b>Hello world ?</b>' // html body
    // };

    // send mail with defined transport object
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Message %s sent: %s', info.messageId, info.response);
    // });

}



//Header Priviledges
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});


app.post('/user', function(req, res) {
    console.log("data from frontend: ", req.body);
    sendDataToAdmin(req.body)
    res.send("we got your data!");
});




app.listen(port, function() {
    console.log("App listening on PORT: " + port);
});
