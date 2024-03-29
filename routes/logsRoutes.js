const express = require('express');
const router = express.Router();

const{ 
    getLogs,
    createLogs,
    updateLogs,
    getLogsByEmpId,
    getLogsBySchId,
} = require('../controllers/logs');

router.get('/getLogs', getLogs);
router.post('/createLogs', createLogs);
router.patch('/updateLogs/:id', updateLogs);
router.get('/getLogsByEmpId/:id', getLogsByEmpId);
router.get('/getLogsBySchId/:id', getLogsBySchId);

module.exports = router ;