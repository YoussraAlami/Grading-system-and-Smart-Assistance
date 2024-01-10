var express = require('express');
var router = express.Router();

const resultController = require('../controllers/resultController.controller');
const { validateParam, validateBody, schemas } = require('../helpers/validation.helper');

router.route('/')
.get(resultController.getAllData)
.post(validateBody(schemas.userSchema),resultController.addData);



router.route('/:id').get(validateParam(schemas.idSchema,'id'),resultController.getDataById)
.patch(validateParam(schemas.idSchema,'id'),validateBody(schemas.userOptionalSchema),resultController.updateData)
.delete(validateParam(schemas.idSchema,'id'),resultController.deleteById);

module.exports = router;