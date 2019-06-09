module.exports = function(app)
{
    app.get('/news', function(req, res){
        res.render("noticias/noticias");
    });
}