var express = require('express');
var router = express.Router();
var User = require("../../models/users")


router.post("/", async (req, res, next) => {
  try {
    var user = await User.create(req.body.user)
    res.status(201).json({
      email: user.email,
      name: user.name,
      username: user.username,
      password: user.password,
      bio: user.bio
    })
  } catch (error) {
    next(error)
  }
})


module.exports = router;
