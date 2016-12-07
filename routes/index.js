var express = require('express');
var router = express.Router();
var User = require('../model/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Samrt Zillow' });
});

router.get('/login', function(next,res,next){
	res.render('login',{ title:'Samrt Zillow' });
});


router.get('/register',function(req,res,next){
	res.render('register', { title: 'Login' });
});


router.post('/register',function(req,res,next){
	var email = req.body.email;
	var password = req.body.password;
		
	User.find({email: email}, function(err,users){
		if(err) throw err;
		if(users.length == 0 ){
			var newUser = User({
				email: email,
				password: password,
			});

			newUser.save(function(err){ //blocking UI
				if(err) throw err;//session?
				res.redirect('/');
			});

		}else{
			res.redirect('/');
		}
	});
	
});

module.exports = router;
