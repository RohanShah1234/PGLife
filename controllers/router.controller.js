const router=require('express').Router();
 const { json } =require('body-parser');
const bodyParser =require('body-parser');
const con = require('../dbconnection');
const express = require("express");
const app = express();
// const bcrypt = require ('bcrypt');
// const saltRounds = 10;
router.use(express.json());

// -- MIDDLEWARE ---
router.use(bodyParser.urlencoded({ extended: true }));

const ANNOUNCEMENT=require("../services/Announcement");
const AnnouncementData = require("../services/announcementData")
const AnnouncementId=require("../services/id");
const AnnouncementUpdate =require("../services/announcementUpdate")


router.post('/announcement',async(req,res)=>{

    try{
        //console.log("announcement")
        const result=await ANNOUNCEMENT.announcement(req.body);
        console.log(result);
 
    }catch(err){
        res.status(406).send({
            msg: "something went wrong please try again",
            err:err
        })
    }
});

router.get('/announcementData',async(req,res)=>{
    try{
        const result=await AnnouncementData.announcementData(req.body);
        console.log(result);
        res.json(result);
    

    }catch(err){
        res.status(406).send({
            msg: "something went wrong please try again",
            err:err
        })
    }
})

router.get('/announcementId',async(req,res)=>{
    try{
        const result=await AnnouncementId.announcementId(req.body);
        console.log(result);
        res.json(result);
    

    }catch(err){
        res.status(406).send({
            msg: "something went wrong please try again",
            err:err
        })
    }
})

router.put('/updateApi',async(req,res)=>{
    try{
        // console.log("hello ", req.query.id)
        const result=await  AnnouncementUpdate.updateAnnouncement(req);
        res.json(result);
    }catch(err){
        res.status(406).send({
            msg: "something went wrong please try again",
            err:err
        })
    }
})

module.exports=router;



// app.post('/announcement',(req,res) =>{
//     console.log("inside ",req.body.id)
//            const id = req.body.id
//            const title = req.body.titleName
//            const content = req.body.contentName
//            const description = req.body.description
//            const created_by = req.body.createrName
//            const is_active = req.body.isActive
//            const created_date = req.body.createdDate
//            // const image_path = null
    
//           const result = con.query(`insert into announcement values(?,? ,? ,? ,? ,? ,?)`,[id,title,content,description,created_by,created_date,  is_active,] ,(err,response) => {
//                   if(err){
//                       return console.log(err)
//                   }
//                   else{
//                          //response.send("Response Success")
//                          console.log("response", response )
    
//                   }
//               })
//              // console.log(result)
//               const data = {
//                   "result" : result
//               }
//              res.send("success")
           
//     })