const express = require('express');
const router  = express.Router();

const controller = require('../controllers/subscription');

router.post('/subscription', controller.createSub);
router.get('/subscription/:id', controller.getSub);
router.get('/subscription', controller.getAllSubs);

module.exports = router;
