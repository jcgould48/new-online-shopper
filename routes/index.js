const express = require('express');
const router = express.Router();

//Render home paige
router.get('/', function(req, res, next) {
  return res.render( 'main/home');
});

router.get('/logout', (req, res)=>{
  req.logout();
  return res.redirect('/');
})

module.exports = router;
