
const dB = require('../models')
const bcrypt = require('bcryptjs');



module.exports = {
    create: function (req, res) {
        // const { username, password } = req.body
        const username = req.body.username;
        const password = req.body.password;
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
                res.json(user);
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




    },
    checkusername: function (req, res) {
        dB.User.findOne({

            username: req.body.username
        }).then(user => {

            if (user)
                res.send(true)
            else
                res.send(false)
        }


        );
    }
}



