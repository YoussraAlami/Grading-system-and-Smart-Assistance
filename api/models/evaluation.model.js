const mongoose = require('mongoose');
const Schema = mongoose.Schema

//============Schema====================
const evaluationShema= new Schema({

Title:{
  type: String,
    },

description:{
     type: String,
              },
        
questions :[{
    type: Schema.Types.ObjectId,
    ref: 'question'
    }],
      
results: [{
      type: Schema.Types.ObjectId,
      ref: 'evaluation'
    }],

},{ timestamps: true })

const evaluation=mongoose.model("evaluation",evaluationShema);
module.exports =evaluation;
//=================================================================
