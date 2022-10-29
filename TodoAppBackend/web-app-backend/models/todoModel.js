const { Schema, default: mongoose } = require("mongoose");

const todoSchema = new Schema({

  body: {
    type: String,
    required: [true, "please provide a body"],
    trim: true,
    // maxlength: [1000, "body cannot be more than 1000 characters"],
  },
  tagline:{
    type:String,
    trim:true
  },
  isPinned:{
    type:Number,
    enum:[0,1]
  }
},{
  timestamps:true
});

module.exports=mongoose.model('Todo',todoSchema);