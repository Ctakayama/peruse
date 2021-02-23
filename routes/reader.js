var data = require('../data.json');
exports.viewProject = function(req, res){
    res.render('reader', data);
};