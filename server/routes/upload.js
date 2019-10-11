const express=require('express');
const router=express.Router();
const fs=require('fs');
const path=require('path');
const uuidv1 = require('uuid/v1');
let multer = require('multer');

router.post('/img', multer({
 dest: 'upload'  
}).single('file'),(req,res)=>{
  fs.readFile(req.file.path,(err,data)=>{
    if(err){return res.send('上传失败')}
    let time= uuidv1();
    let extname=req.file.mimetype.split('/')[1]
    let keepname=time+'.'+extname
    fs.writeFile(path.join(__dirname,'../public/upload/'+keepname),data,(err)=>{
        if(err){return res.send('写入失败')}
        res.send({err:0,msg:'上传ok',url: '/upload/'+keepname})
    });
 });
})
module.exports=router;