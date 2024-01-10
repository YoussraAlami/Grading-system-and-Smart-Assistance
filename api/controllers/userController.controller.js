const users = require("../models/user.model"); //"require"recoi le module qui a exporté
module.exports = {

getAllData: async (req, res) => {
try {
const data = await users.find({})
res.status(200).json(data);
} catch (error) {
res.status(500).json(error);
}
},


addData: async (req, res) => {
try {
const dataInstance = new users(req.body);
const instance = await dataInstance.save()
res.status(201).json(instance);
} catch (error) {
res.status(400).json(error);
}
},


getDataById: async (req, res) => {
try {
const Id = req.params.id;
const data = await users.findById(Id)
res.status(200).json(data);
} catch (error) {
res.status(500).json(error);
}
},


findUserByEmail: async (req, res) => {
    const  email = req.params.email; // Récupérez l'email à partir des paramètres de la requête
  
    try {
      const user = await users.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la recherche de l\'utilisateur', error: error.message });
    }
},


updateData: async (req, res) => {
try {
const dataId = req.params.id;
const data = req.body;
const newData = await users.findByIdAndUpdate(dataId, data, { new: true })
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
const deletedObject = await users.findByIdAndDelete(Id)
res.status(200).json(deletedObject)
}catch(error){
res.status(500).json(error)
}
}
}