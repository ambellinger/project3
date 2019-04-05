// // const express = require('express')
// const router = express.Router()
const dB = require('../models')
const passport = require('../passport')
const bcrypt = require('bcryptjs');



module.exports = {
    create: function (req, res) {
       // const { username, password } = req.body
       const username =req.body.username;
       const password =req.body.password;
        // ADD VALIDATION


        dB.User.findOne({ username: username }, (err, user) => {


            if (err) {
                console.log('User.js post error: ', err)
            } else if (user) {
                res.json({
                    error: `Sorry, already a user with the username: ${username}`
                })
            }
            else {
                const newUser = new dB.User({
                    username: username,
                    password: password
                })
                newUser.save((err, savedUser) => {
                    if (err) return res.json(err)
                    res.json(savedUser)
                })
            }
        })

    },
    findUser: function (req, res) {

        dB.User.findOne({

            username: req.body.username
        }).then(function (user) {
          if (!user) {
            res.json( user);
          } else {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
              if (result === true) {
                res.json(user);
              } else {
                res.json(false);
              }
            });
          }
        });

        // ', (err, user) => {
        // 	// if (err) {
        // 	// 	res.json({err})
        // 	// }
        // 	if (!user) {
        //         res.json( results => {
        //             message: 'Incorrect username'

        //     })
        // 	}
        // 	if (!user.checkPassword(req.body.password)) {
        //         res.json( { message: 'Incorrect password' })
        // 	}
        // 	res.json ({username: user})
        // })


    },
    checkusername:function (req, res) {
        dB.User.findOne({

            username: req.body.username 
        }).then(user=> {
            
            if(user)
             res.send(true)
             else
             res.send(false)
        }
   
        
        );
    }
}



// router.post(
//     '/login',
//     function (req, res, next) {
//         console.log('routes/user.js, login, req.body: ');
//         console.log(req.body)
//         next()
//     },
//     passport.authenticate('local'),
//     (req, res) => {
//         console.log('logged in', req.user);
//         var userInfo = {
//             username: req.user.username
//         };
//         res.send(userInfo);
//     }
// )

// router.get('/', (req, res, next) => {
//     console.log('===== user!!======')
//     console.log(req.user)
//     if (req.user) {
//         res.json({ user: req.user })
//     } else {
//         res.json({ user: null })
//     }
// })

// router.post('/logout', (req, res) => {
//     if (req.user) {
//         req.logout()
//         res.send({ msg: 'logging out' })
//     } else {
//         res.send({ msg: 'no user to log out' })
//     }
// })

// module.exports = router