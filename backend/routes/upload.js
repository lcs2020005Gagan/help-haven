const express=require("express")
const bodyParser = require("body-parser");
const User=require("../models/Users")
const Card=require("../models/Cards")
let fetchuser=require("../middleware/fetchuser")
const router=express.Router()
const app =express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
const secretKey="helloworld"
var jwt=require("jsonwebtoken");
// const fetchmentor = require("../middleware/fetchmentor");
// let success=false




 
  //addcard
  router.post('/addcard', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 1}),
    body('briefDescription').isLength({min:1}),
    body('description').isLength({min:1}),
    body('tags')
   ], async (req, res) => {
        try {
            const { title,briefDescription, description,tags } = req.body;

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            const card = new Card({
                title,briefDescription,description, tags, author: req.id,
                })
            const savedCard = await card.save()
            await User.findOneAndUpdate({
                _id:req.id
              },{
                $push:{
                    cardId:card
                }
              })
            // res.json(savedCard)
            res.send({success:"success",card:savedCard});
            console.log(req);

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

    //getallcards
    router.get('/getallcards',async (req,res)=>{
        const cards= Card.find()
         .populate("author")
         .exec()
         .then(p=>{
             res.status(200).json(p)
         })
         .catch(error=>console.log(error));
       })

    //get user specific cards
    router.get('/getusercards',async (req,res)=>{
        const cards= Card.find()
         .populate("author")
         .exec()
         .then(p=>{
             res.status(200).json(p)
         })
         .catch(error=>console.log(error));
       })
     
      
    //deletecard
    router.delete('/deletecard/:id', fetchuser, async (req, res) => {
        console.log("hello naveed");
        try {
            let card =await Card.findById(req.params.id);
            if(!card)
            {
                res.status(498).send("Note note found");
            }
            if(card.author.toString()!==req.id)
            {
                res.status(401).send("Not authorized");
            }
            card=await Card.findByIdAndDelete(req.params.id);
            res.json({"success":"Note was successfully deleted",card:card});
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


     //update user
 router.post('/updateuser', fetchuser, [
    body('card_id'),
   ], async (req, res) => {
        try {
            const card_id = req.body.card_id;
           await User.findOneAndUpdate({
              _id:req.id
            },{
              $push:{
                likedCards:card_id
              }
            })
            await Card.findOneAndUpdate({
              _id:card_id
            },{
              $inc: { priority: 1}
            })
            const user=await User.find({_id:req.id});
            res.json(user);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })
  

    


module.exports=router
