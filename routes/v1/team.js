var express = require('express')
var router = express.Router()
var slug = require('slug')
var User = require('../../models/users')
var Board = require('../../models/boards')
var Team = require('../../models/team')

var auth = require('../../middleware/auth')


// create team
router.post("/", auth.verifyToken, async (req, res, next) => {
    try {
        req.body.team.owner = req.user.userId
        req.body.team.member = [req.user.userId]

        var team = await Team.create(req.body.team)

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

// update team

router.put('/:slug', auth.verifyToken, async (req, res, next) => {
    try {
        req.body.team.slug = slug(req.body.team.name, { lower: true })
        var team = await Team.findOneAndUpdate({ slug: req.params.slug },
            req.body.team,
            { new: true }
        )
        res.json({ team })
    } catch (error) {
        next(error)
    }
})

module.exports = router