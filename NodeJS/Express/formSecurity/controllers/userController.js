const { body, validationResult } = require("express-validator")
const userStorage = require('../storages/usersStorage')
const usersStorage = require("../storages/usersStorage")

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";


const validateUser = [
    body('firstName').trim()
    .isAlpha().withMessage(`First name: ${alphaErr}`)
    .isLength({ min: 1, max: 10 }).withMessage(`First name: ${lengthErr}`),
    
    body('lastName').trim()
    .isAlpha().withMessage(`Last name: ${alphaErr}`)
    .isLength({ min: 1, max: 10 }).withMessage(`Last name: ${lengthErr}`),
    
    body('email').trim()
    .isEmail().withMessage('Email must be a valid email address'),

    body('age').trim()
    .isNumeric({ min: 18, max: 120 }).withMessage('Age must only conain numbers between 18 & 120.')
]

exports.usersListGet = (req, res) => {
    res.render('index', {
        title: 'User List',
        users: userStorage.getUsers()
    })
}

exports.usersCreateGet = (req, res) => {
    res.render('createUser', {
        title: 'Create User',
        user: {firstName: 'John', lastName: 'Doe'}
    })
}

exports.usersCreatePost = (req, res) => {
    const { firstName, lastName } = req.body
    //Only 2 inputs exist. name = firstName & name = lastName
    userStorage.addUser({ firstName, lastName })
    res.redirect('/')
}

exports.usersUpdateGet = (req, res) => {
    const user = usersStorage.getUser(req.params.id)
    res.render('updateUser', {
        title: 'Update User', 
        user: user,
    })    
}

exports.usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array()
      });
    }
    const { firstName, lastName } = req.body;
    usersStorage.updateUser(req.params.id, { firstName, lastName });
    res.redirect("/");
  }
];

exports.usersDeletePost = (req, res) => {
    usersStorage.deleteUser(req.params.id)
    res.redirect('/')

}

/* LINKED TO THE STORAGE CLASS AND CLASS FUNCTIONS */