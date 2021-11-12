const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(__dirname+"/../static_html/voice.html");
})

module.exports = router;
