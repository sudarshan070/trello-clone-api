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

// get team
router.get('/', auth.verifyToken, async (req, res, next) => {
    try {
        var team = await User.findById(req.user.userId)
        res.json({ team: team.teamId })
    } catch (error) {
        next(error)
    }
})


// delete team
router.delete('/:slug', auth.verifyToken, async (req, res, next) => {
    try {
        var team = await Team.findOne({ slug: req.params.slug })
        if (team.owner == req.user.userId) {
            var board = await Board.updateMany(
                { teamId: team.id },
                { teamId: null },
                { new: true }
            )
            team = await Team.findByIdAndDelete(team.id)
            res.json({
                success: 'team deleted successfully '
            })
        }
    } catch (error) {
        next(error)
    }
})

// add team member

router.post('/:slug/member/:username', auth.verifyToken, async (req, res, next) => {
    try {
        let username = req.params.username
        console.log(username, "username");
        let slug = req.params.slug
        var user = await User.findOne({ username })
        var team = await Team.findOne({ slug })
        if (team.owner == req.user.userId) {
            team = await Team.findByIdAndUpdate(
                team.id,
                { $addToSet: { members: user.id } },
                { new: true }
            ).populate("members")
            user = await User.findByIdAndUpdate(
                user.id,
                { $addToSet: { teamId: team.id } },
                { new: true }
            )
            res.status(201).json({ team })
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router