
/*
 * GET home page.
 */
var icons = require('../data.json');

exports.view = function(req, res){
  res.render('index', icons);
};

exports.viewHome = function(req, res){
  res.render('home', icons);
};

exports.viewsignUp = function(req, res){
  res.render('signUp', icons);
};

exports.viewSettings = function(req, res){
  res.render('settings');
};

exports.viewHelp = function(req, res){
  res.render('help');
};