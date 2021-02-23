
/*
 * GET home page.
 */
var data = require('../data.json');

exports.view = function(req, res){
  res.render('index', data);
};

exports.viewHome = function(req, res){
  res.render('home', data);
};

exports.viewsignUp = function(req, res){
  res.render('signUp', data);
};

exports.viewSettings = function(req, res){
  res.render('settings');
};

exports.viewHelp = function(req, res){
  res.render('help');
};