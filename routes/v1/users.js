var express = require('express');
var router = express.Router();
var User = require("../../models/users")
var auth = require("../../middleware/auth")

// Register user
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

// Login user
router.post("/login", async (req, res, next) => {
  var { password, email } = req.body.user
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: "Email and Password are required"
    })
  }
  try {
    var user = await User.findOne({ email })
    console.log(user, "user is here")
    if (!user) {
      return res.status(400).json({
        success: false,
        error: "Email is wrong"
      })
    }
    if (!user.verifyPassword(password) && !user.verifyPassword(password) == "") {
      return res.status(400).json({
        success: false,
        error: "Password is wrong"
      })
    }
    var token = await auth.generateJWT(user)
    res.status(201).json({
      email: user.email,
      name: user.name,
      token
    })
  } catch (error) {
    next(error)
  }
})

// Get current user
router.get("/", auth.verifyToken, async (req, res, next) => {
  try {
    var user = await User.findById(req.user.userId)
    res.status(201).json({
      user: {
        name: user.name,
        username: user.username,
        token: req.user.token
      }
    })
  } catch (error) {
    next(error)
  }
})


// update user
router.put("/", auth.verifyToken, async (req, res, next) => {
  try {
    var user = await User.findByIdAndUpdate(req.user.userId, req.body.user, { new: true })
    res.status(201).json({
      user: {
        email: user.email,
        name: user.name,
        username: user.username,
        password: user.password,
        bio: user.bio,
        token: req.user.token
      }
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router;
