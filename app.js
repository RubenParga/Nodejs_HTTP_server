var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/nombre', (request, response) => {
    response.render('home', {
      name: 'John'
    })
  })
 
app.listen(3000);

