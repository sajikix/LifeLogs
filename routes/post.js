const express = require('express');
const router = express.Router();

const ObjectID = require('mongodb').ObjectID;

const collection = require('../mongo');
const COLNAME = 'rawdata';

router.get('/', function(req, res) {
  console.log(collection);
  res.render('index', {
    title: 'LifeLog'//#{title}として使う
  });
});

module.exports = router;
