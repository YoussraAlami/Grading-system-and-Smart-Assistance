const mongoose = require('mongoose');
const Schema = mongoose.Schema
const evaluation =require('./evaluation.model')


//============Schema====================
const questionShema= new Schema({

id_question:{
  type: String,
    },
question:{
     type: String,
              },
response:{
  type: String,
          },

ref_eval: {
      type: Schema.Types.ObjectId,
      ref: 'evaluation'
      },
      
},{ timestamps: true })



questionShema.post("save", function () {

  const eval_id = String(this.ref_eval);
 
  if (eval_id) {
     
    evaluation.findOneAndUpdate(
      { _id: eval_id },
      { $push: { questions: this._id } },
      { new: true }
    )
    .then(updatedUser => {
      console.log('evaluation updated successfully :', updatedUser);
    })
    .catch(err => {   
      console.error('Error updating evaluation :', err);
  });} 
});      

const question=mongoose.model("question",questionShema);
module.exports =question;
//=================================================================
