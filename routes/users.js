const express = require('express');
const router = express.Router();

const usersCOntroller = require('../controllers/users');

router.get('/', usersCOntroller.getAll);

router.get('/:id', usersCOntroller.getSingle);

module.exports = router;
