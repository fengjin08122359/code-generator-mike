var express = require('express');
var router = express.Router();
let multer = require('multer');
const fs=require('fs');
var {analysisJson,getList,getSingle, analysisTest, delSingle} = require('../postman/index')
/* post users listing. */


router.post('/upload', multer({
 dest: 'upload'  
}).single('file'),async (req,res)=>{
  var routerId = req.body.routerId
  var data = fs.readFileSync(req.file.path)
  var translate = JSON.stringify(JSON.parse(data))
  await analysisJson(routerId, JSON.parse(translate));
  res.send({err:0})
})
router.post('/getList', async function(req, res, next) {
  var routerId = req.body.routerId
  res.send(await getList(routerId));
});
router.post('/getSingle', async function(req, res, next) {
  var routerId = req.body.routerId
  var id = req.body.id
  res.send(await getSingle(routerId, id));
});
router.post('/saveSingle', async function(req, res, next) {
  var routerId = req.body.routerId
  var id = req.body.id
  var name = req.body.name
  var type = req.body.type
  var url = req.body.url
  var data = JSON.parse(req.body.data)

  var target = await getSingle(routerId, id);
  target.save(routerId, {
    name,
    type,
    url,
    data
  })
  res.send(await getSingle(routerId, id));
});
router.post('/delMul', async function(req, res, next) {
  var routerId = req.body.routerId
  var ids = req.body.ids
  for (const id of ids.split(',')) {
    if (id) {
      await delSingle(routerId, id);
    }
  }
  res.send({});
});

router.post('/test', async function(req, res, next) {
  var routerId = req.body.routerId
  var id = req.body.id
  var target = await getSingle(routerId, id);
  res.send(await target.test());
});

module.exports = router;
