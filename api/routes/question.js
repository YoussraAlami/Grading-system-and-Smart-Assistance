var express = require('express');
var router = express.Router();

const ControllerQuestion = require('../controllers/questionController.controller');
const { validateParam, validateBody, schemas } = require('../helpers/validation.helper');

router.route('/')
.get(ControllerQuestion.getAllData)
.post(validateBody(schemas.userSchema),ControllerQuestion.addData);



router.route('/:id').get(validateParam(schemas.idSchema,'id'),ControllerQuestion.getDataById)
.patch(validateParam(schemas.idSchema,'id'),validateBody(schemas.userOptionalSchema),ControllerQuestion.updateData)
.delete(validateParam(schemas.idSchema,'id'),ControllerQuestion.deleteById);

module.exports = router;