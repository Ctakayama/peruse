var icons = require('../icons.json');
exports.viewProject = function(req, res){
    res.render('reader', icons);
};