const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostConstroller')

router.post('/poste', (req, res)=> PostController.store(req, res))
router.get('/postes', (req, res)=> PostController.all(req, res))
module.exports = router;