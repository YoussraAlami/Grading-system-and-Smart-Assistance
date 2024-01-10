const mongoose = require('mongoose');
const Schema = mongoose.Schema
const userModel = require('./user.model')
const evaluationModel = require('./evaluation.model')



//============Schema====================
const ResultSchema= new Schema({

Note:{
     type: String,
              },

final_result:{
  type: Integer,
          },

ref_user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
      },

ref_evaluation: {
  type: Schema.Types.ObjectId,
  ref: 'evaluation'
},
          
},{ timestamps: true })



ResultSchema.post("save", function () {

  const user_id = String(this.ref_user);
  const evaluation_id = String(this.ref_evaluation);


  if (user_id) {
     
    userModel.findOneAndUpdate(
      { _id: user_id },
      { $push: { results: this._id } },
      { new: true }
    )
    .then(updatedUser => {
      console.log('user updated successfully :', updatedUser);
    })
    .catch(err => {
      console.error('Error updating user :', err);
    });
  } 



  if (evaluation_id) {
     
    evaluationModel.findOneAndUpdate(
      { _id: evaluation_id },
      { $push: { results: this._id } },
      { new: true }
    )
    .then(updatedUser => {
      console.log('evaluation updated successfully :', updatedUser);
    })
    .catch(err => {
      console.error('Error updating evaluation :', err);
    });
  } 
});

const result=mongoose.model("result",ResultSchema);
module.exports =result;



//=================================================================
