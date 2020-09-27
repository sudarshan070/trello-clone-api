var express = require('express')
var router = express.Router()

var User = require('../../models/users')
var Board = require('../../models/boards')
var Team = require('../../models/team')

var auth = require('../../middleware/auth')


// create team

router.post("/", auth.verifyToken, async (req, res, next) => {
    try {
        console.log(req.user.userId, "owner")
        console.log([req.user.userId], 'member')
        // req.body.team.owner = req.user.userId
        req.body.team.member = [req.user.userId]

        var team = await Team.create(req.body.team)
        console.log(team)

        var user = await User.findByIdAndUpdate(
            req.user.userId,
            { $addToSet: { teamId: team.id } },
            { new: true }
        )
        res.status(201).json({
            team: {
                name: team.name,
                slug: team.slug,
                description: team.description
            }
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router