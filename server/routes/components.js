var express = require('express');
var router = express.Router();
var {db} = require('../redis/index')
/* GET users listing. */
router.post('/getBasic',async function(req, res, next) {
  var id = req.body.id
  var result = await db.getBasic({id});
  res.send(result);
});
router.post('/saveBasic', function(req, res, next) {
  var id = req.body.id
  var list = req.body.list
  var alias = req.body.alias
  db.saveBasic({id, list, alias})
  res.send({});
});


router.post('/getArrangeList',async function(req, res, next) {
  var result = await db.getArrangeList();
  res.send(result);
});
router.post('/getArrange',async function(req, res, next) {
  var id = req.body.id
  var result = await db.getArrange({id});
  res.send(result);
});
router.post('/saveArrange', function(req, res, next) {
  var id = req.body.id
  var list = req.body.list
  var alias = req.body.alias
  db.saveArrange({id, list, alias})
  res.send({});
});
router.post('/delArrange',async function(req, res, next) {
  var id = req.body.id
  var result = await db.delArrange({id});
  res.send(result);
});

module.exports = router;
