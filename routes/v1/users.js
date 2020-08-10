var express = require('express');
var router = express.Router();
var User = require("../../models/users")
var auth = require("../../middleware/auth")


router.post("/", async (req, res, next) => {
  try {
    var user = await User.create(req.body.user)
    var token = await auth.generateJWT(user)
    res.status(201).json({
      email: user.email,
      name: user.name,
      username: user.username,
      password: user.password,
      bio: user.bio,
      token
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router;
