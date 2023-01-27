const mongoose=require("mongoose")

const cardsSchema=new mongoose.Schema({
title:{
    type:String,
    required:true
},
briefDescription:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
date:{
    type:Date,
    default:Date.now().toGMTString
},
priority:{
    type:Number,
    default:0
},
tags:{
    type:Array,
    default:["no tags"],
}
});
const cards=mongoose.model("cards",cardsSchema);
cards.createIndexes();
module.exports=cards