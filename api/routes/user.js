var express = require('express');
var router = express.Router();

const ControllerUser = require('../controllers/userController.controller');
const { validateParam, validateBody, schemas } = require('../helpers/validation.helper');

router.route('/')
.get(ControllerUser.getAllData)
.post(validateBody(schemas.userSchema),ControllerUser.addData);

// router.route('/:email').get(ControllerUser.findUserByEmail)


router.route('/:id').get(validateParam(schemas.idSchema,'id'),ControllerUser.getDataById)
.patch(validateParam(schemas.idSchema,'id'),validateBody(schemas.userOptionalSchema),ControllerUser.updateData)
.delete(validateParam(schemas.idSchema,'id'),ControllerUser.deleteById);

module.exports = router;