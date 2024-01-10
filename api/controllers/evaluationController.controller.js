const evaluation = require("../models/evaluation.model"); 
module.exports = {

getAllData: async (req, res) => {
try {
const data = await evaluation.find({})
res.status(200).json(data);
} catch (error) {
res.status(500).json(error);
}
},


addData: async (req, res) => {
try {
const dataInstance = new question(req.body);
const instance = await dataInstance.save()
res.status(201).json(instance);
} catch (error) {
res.status(400).json(error);
}
},


getDataById: async (req, res) => {
try {
const Id = req.params.id;
const data = await evaluation.findById(Id)
res.status(200).json(data);
} catch (error) {
res.status(500).json(error);
}
},

updateData: async (req, res) => {
try {
const dataId = req.params.id;
const data = req.body;
const newData = await evaluation.findByIdAndUpdate(dataId, data, { new: true })
res.json(newData)
//res.status(200).json({ newData: cellule, success: 'data was updated succefuly' });
} catch (error) {
res.status(500).json({ error: error, errorMsg: 'An error occurred while updating data'
});
}
},


deleteById: async (req, res, next) => {
try {
const Id = req.params.id;
const deletedObject = await evaluation.findByIdAndDelete(Id)
res.status(200).json(deletedObject)
}catch(error){
res.status(500).json(error)
}
}
}