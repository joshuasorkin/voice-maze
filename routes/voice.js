const express = require('express');
const path = require('path');
const router = express.Router();
const voiceHTML = '../static_html/voice-maze.html';
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,voiceHTML));
});


module.exports = router;
