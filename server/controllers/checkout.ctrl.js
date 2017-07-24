var express = require('express');
var stripeSvc = require('../services/stripe.svc');
var mailService = require('../services/email.svc');

var router = express.Router();

router.post('/', function(req, res) {
    var amount = Number(req.body.amount);
    stripeSvc.charge(req.body.token, amount)
    .then(function(success) {
        res.sendStatus(204);
    }, function(err) { 
        console.log(err); 
        res.sendStatus(500); 
    });
    let content = `<h3>Thank you for shopping with Covalence!</h3>
                    <p>We hope you enjoy the following products:</p>
                    <div>${req.body.myCart}</div>
                    <p>Your total is ${req.body.amount}.</p>
                    <p>Your purchase should arrive in 2-4 weeks!</p>`;
    mailService.sendEmail('trishbazemore@gmail.com', 'no-reply@covalence.com', 'Order Confirmation', content)
    .then(function(success) {
        res.sendStatus(201);
    }, function(err) {
        console.log(err);
        res.sendStatus(500);
    });
});

module.exports = router;





