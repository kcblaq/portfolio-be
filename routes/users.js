var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/more', (req,res) => {
  res.send('More users are here')
})

module.exports = router;
