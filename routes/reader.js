var icons = require('../icons.json');
var text = require('../text.json');
exports.viewProject = function(req, res){
    res.render('reader', icons);
};