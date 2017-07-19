var express = require('express');
var stripeSvc = require('../services/stripe.svc');
var mailService = require('../services/email.svc');

var router = express.Router();

router.post('/', function(req, res) {
     let content = `<h3>You have a new message</h3>
                    <h5>From: ${req.body.email}</h5>
                    <p>${req.body.message}</p>`;
    mailService.sendEmail(customeremail, 'no-reply@covalence.com', 'Order Confirmation', productspurchasedandamount)
    var amount = Number(req.body.amount);
    stripeSvc.charge(req.body.token, amount)
    .then(function(success) {
        res.sendStatus(204);
    }, function(err) { 
        console.log(err); 
        res.sendStatus(500); 
    });
});

module.exports = router;





