var express = require('express');
var router = express.Router();
var {db} = require('../redis/index')
/* GET users listing. */
router.post('/',async function(req, res, next) {
  res.send(await db.getAllProject());
});

router.post('/add',async function(req, res, next) {
  var name = req.body.name
  await db.addProject(name)
  res.send({});
});

router.post('/del',async function(req, res, next) {
  var id = req.body.id
  await db.delProject(id)
  res.send({});
});

router.post('/modify',async function(req, res, next) {
  var newName = req.body.newName
  var id = req.body.id
  await db.modifyProject(id, {newName})
  res.send({});
});


router.post('/getRouter',async  function(req, res, next) {
  var id = req.body.id
  res.send(await db.getRouter(id));
});

router.post('/addRouter', async function(req, res, next) {
  var id = req.body.id
  var name = req.body.name
  var path = req.body.path
  var alias = req.body.alias
  await db.addRouter(id, {name, path, alias})
  res.send({});
});

router.post('/delRouter',async function(req, res, next) {
  var id = req.body.id
  var routerId = req.body.routerId
  await db.delRouter(id, routerId)
  res.send({});
});

router.post('/modifyRouter', async function(req, res, next) {
  var id = req.body.id
  var name = req.body.name
  var path = req.body.path
  var routerId = req.body.routerId
  var alias = req.body.alias
  await db.modifyRouter(id, {routerId,name,path, alias})
  res.send({});
});

module.exports = router;
