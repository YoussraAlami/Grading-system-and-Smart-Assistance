const mongoose = require('mongoose');
const Schema = mongoose.Schema



//============Schema====================
const Userchema= new Schema({

email:{
  type: String,
    },
userName:{
     type: String,
              },
password:{
  type: String,
          },

          
results :[{
   type: Schema.Types.ObjectId,
   ref: 'result'
     }],


evaluations :[{
      type: Schema.Types.ObjectId,
      ref: 'evaluation'
}],


          
},{ timestamps: true })


const user=mongoose.model("user",Userchema);
module.exports =user;
//=================================================================
