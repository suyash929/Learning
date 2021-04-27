const express = require('express');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const router = express.Router();
const crudOperations = require('./crud.operations');

const insertSchema = Joi.object({ // schema for validating record before inserting
    login: Joi.string().required(),
    password: Joi.string().regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/).required(),
    age: Joi.number().integer().min(4).max(130).required()
});

const updateSchema = Joi.object({ // schema for validating record before updating
    id: Joi.string().regex(/^[0-9]*$/).required(),
    login: Joi.string().optional(),
    password: Joi.string().regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/).optional(),
    age: Joi.number().integer().min(4).max(130).optional()
});

router.get('/uid/:uid', (req, res) => {
    const getData = crudOperations.getData(req.params.uid);
    res.send(`User details => ${JSON.stringify(getData)}`);
});

router.post('/createUser', validator.body(insertSchema), (req, res) => {
    const getData = crudOperations.postData(req.body);
    res.send(`User created => ${JSON.stringify(getData)}`);
});

router.put('/updateUser', validator.body(updateSchema), (req, res) => {
    const getData = crudOperations.putData(req.body);
    res.send(`Data updated succesfully => ${JSON.stringify(getData)}`);
});

router.delete('/uid/:uid', (req, res) => {
    const deleteData = crudOperations.deleteData(req.params.uid);
    console.log(deleteData);
    res.send(`Data deleted succesfully => ${JSON.stringify(deleteData)}`);
});

module.exports = router;
