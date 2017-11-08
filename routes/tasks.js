var express = require('express');
var router = express.Router();

router.get('/tasks', function (request, response, next){
    response.send('This is the task api page.');
});

module.exports = router;
