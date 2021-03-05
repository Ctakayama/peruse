
/*
 * GET home page.
 */
const { request } = require('express');
var data = require('../data.json');

exports.view = function(req, res){
  res.render('index', data);
};

exports.viewHome = function(req, res){
  res.render('home', data);
};

exports.viewHomeWName = function(req, res){
  newUser = {
    "name":req.params.name
  };
  
  data.user.pop();
  data.user.push(newUser);
  res.render('home', data);
};

exports.viewsignUp = function(req, res){
  res.render('signUp', data);
};

exports.viewSettings = function(req, res){
  res.render('settings', data);
};

exports.viewHelp = function(req, res){
  res.render('help', data);
};

exports.viewPaste = function(req, res){
  res.render('pasteText', data);
};

exports.viewUpload = function(req, res){
  res.render('uploadText', data);
};
exports.viewScan = function(req, res){
  res.render('scanText', data);
};