var express = require('express');
var router = express.Router();
var {db} = require('../redis/index')
var {generateComponents, generatePages, generateRouters, generateHttplink, clearAim, createZip} = require('../utils/generate')
/* post users listing. */
router.post('/component', async function(req, res, next) {
  var id = req.body.id
  clearAim()
  await generateComponents(id, db.getArrange({id}) || [])
  await createZip()
  res.send({src: './server/dist.zip'});
});


router.post('/basic',async function(req, res, next) {
  var id = req.body.id
  clearAim()
  await generatePages(id,await db.getBasicList({id}) || [])
  await createZip()
  res.send({src: './server/dist.zip'});
});


router.post('/router',async function(req, res, next) {
  var id = req.body.id
  var needPage = req.body.needPage
  clearAim()
  var routerData = await generateRouters(await db.getRouter(id) || [])
  if (needPage != 0) {
    routerData.forEach(async item => {
      await generatePages(item.id,await db.getBasicList({id: item.id}) || [])
    })
  }
  await createZip()
  res.send({src: './server/dist.zip'});
});


router.post('/project',async function(req, res, next) {
  var id = req.body.id
  clearAim()
  var routerData = await generateRouters(await db.getRouter(id) || [])
  routerData.forEach(async item => {
    await generatePages(item.id,await db.getBasicList({id: item.id}) || [])
  })
  await createZip(true)
  res.send({src: './server/dist.zip'});
});

router.post('/postman', async function(req, res, next) {
  var id = req.body.id
  clearAim()
  await generateHttplink(await db.postman.getList(id) || [])
  await createZip()
  res.send({src: './server/dist.zip'});
});


module.exports = router;
