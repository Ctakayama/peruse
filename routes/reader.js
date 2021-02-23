var icons = require('../data.json');
exports.viewProject = function(req, res){
    res.render('reader', icons);
};