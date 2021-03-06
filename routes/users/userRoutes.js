const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../../lib/passport');


const userController = require('./controllers/userController');
const userValidation = require('./utils/userValidation');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next){
  res.render('auth/register', {errors: req.flash('errors')})
})

router.post('/register', userValidation, userController.register);
 
router.get('/login', (req, res)=>{
    return res.render('auth/login', {errors: req.flash('errors')});
  }
);

router.post('/login', passport.authenticate('local-login',{
  successRedirect: '/',
  failureRedirect: '/api/users/login',
  failureFlash: true

})
);

//profile routes
router.get('/profile',(req, res, next)=>
{if(req.isAuthenticated()){
  return res.render('auth/profile')
} else {
  return res.send('Unauthorized')
}
})

module.exports = router;
