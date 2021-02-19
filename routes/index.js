
/*
 * GET home page.
 */
var icons = require('../icons.json');

exports.view = function(req, res){
  res.render('index', icons);
};

exports.viewSettings = function(req, res){
  res.render('settings');
};

exports.viewHelp = function(req, res){
  res.render('help');
};