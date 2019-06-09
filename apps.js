var app = require('./config/server')

var rotaNoticias = require('./app/routes/news');
rotaNoticias(app);

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaForm = require('./app/routes/form');
rotaForm(app);

app.listen(3000, function(){
    console.log("Server ON");
});

