const express = require('express');
const router = express.Router();
const products = require ('./products/models/Products.json')

//Render home paige
router.get('/', function(req, res, next) {
  return res.render( 'main/home', {products});
});

router.get('/logout', (req, res)=>{
  req.logout();
  return res.redirect('/');
})


module.exports = router;
