// controller actions
exports.signup_get = (req, res) => {
  res.render('signup');
}

exports.login_get = (req, res) => {
  res.render('login');
}

exports.signup_post = async (req, res) => {
 
  // res.send('new signup');
  res.json(req.body);
}

exports.login_post = async (req, res) => {
  try {
    // console.log(req);

  const  response = {  
    name: req.body.name,  
    email: req.body.email,
    password: req.body.password
  };  


  res.json({name: req.body.name});
  console.log(response);
  } catch (err){
    console.log(err);
  }
  
  
  
  

}