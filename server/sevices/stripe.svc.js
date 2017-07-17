var stripe = require('stripe')(secret key);

exports.charge = function(token, amt) {
    return stripe.charges.create({  //stripe uses promises ..wants an obj return so we can do .charge.then elsewhere
        source: token,
        amount: amt * 100, // amount in cents for stripe/ eliminate decimal
        currency: 'usd',
        description: 'Covalence Store' //what appears on their credit card, shows up in all caps on descript 
});
    // returning a promise, so when we call .charge, we can use .then(...)
}