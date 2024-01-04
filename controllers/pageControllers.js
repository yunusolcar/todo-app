exports.getIndex = (req, res) => {
     res.status(200).render('index', {
          pageName: "Index"
     });
}

exports.getRegister = (req, res) => {
     res.status(200).render('register', {
          pageName: 'Register'
     });
}

exports.getLogin = (req, res) => {
     res.status(200).render('login', {
          pageName: 'Login'
     });
}