module.exports = function(app, config) {

  //jade partials request
  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
    console.log(req.params[0]);
  });

  app.get('*', function(req, res) {
    res.render('index');
  });
};
