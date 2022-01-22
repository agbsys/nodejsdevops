router.get('/', function(req, res, next) {
    res.render('index', { error: false });
});