// var dbConnection = require('../../config/dbConnection');

module.exports = function(app)
{
     app.get('/news', function(req, res){
         var connection  = app.config.dbConnection();
         connection.query('SELECT * FROM noticias', function(error, result){
             res.render("noticias/noticias", { noticias: result});
         });
     });
}