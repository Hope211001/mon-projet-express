const express = require('express');
const router = express.Router();
const PersonnelController = require('../controllers/PersonnelController');

router.post('/personnel', (req,res)=>PersonnelController.store(req,res));
module.exports= router;