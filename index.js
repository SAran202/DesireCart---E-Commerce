const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('home');
});
app.get('/offers',(req,res) => {
    res.render('offers',{
        title : "Offers | DesireCart"
    });
});
app.get('/cart',(req,res) => {
    res.render('cart',{
        title : "Cart | DesireCart"
    });
});
app.get('/account',(req,res) => {
    res.render('account',{
        title : "Account | DesireCart"
    });
});
app.get('/details',(req,res) => {
    res.render('details',{
        title : "Details | DesireCart"
    });
});

/*..........................................*/

app.get('/details/id',(req,res) => {
    var data = [
        {
            id : 1,
            productName : "SA"
        },
        {
            id : 2,
            productName : "AS"
        },
        {
            id : 3,
            productName : ""
        },
    ]
    var result;
    data.forEach((product) => {
        if(product.id == req.params.id){
            result = product;
            return true;
        }
    })
    res.render('details',{
        title : "Details",
        product : result
    });
});

app.listen(3000);