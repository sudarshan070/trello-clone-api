const express = require('express');
const slug = require('slug');
const router = express.Router();
const auth = require('../../middleware/auth')
const Board = require('../../models/boards')
const User = require('../../models/users')


// get all board
router.get('/', auth.verifyToken, async (req, res, next) => {
    try {
        var board = await Board.find({})
        res.json({ board })
    } catch (error) {
        next(error)
    }
})

// create  board
router.post("/", auth.verifyToken, async (req, res, next) => {
    try {
        // console.log(req.body.board, "req.body.board")
        // console.log(req.user, 'req.user')
        req.body.board.owner = req.user.userId

        var board = await Board.create(req.body.board)

        var user = await User.findByIdAndUpdate(
            req.user.userId,
            { $addToSet: { boardId: board.id } },
            { new: true }
        )
        res.status(201).json({
            board: {
                name: board.name,
                slug: board.slug,
            }
        })
    } catch (error) {
        next(error)
    }
})


// get single board
router.get('/:slug', auth.verifyToken, async (req, res, next) => {
    try {
        var board = await Board.findOne({ slug: req.params.slug })
        res.json({ board })
    } catch (error) {
        next(error)
    }
})

// update board
router.put('/:slug', auth.verifyToken, async (req, res, next) => {
    try {
        req.body.board.slug = slug(req.body.board.name, { lower: true })
        var board = await Board.findOneAndUpdate({ slug: req.params.slug },
            req.body.board,
            { new: true }
        )
        res.json({ board })
    } catch (error) {
        next(error)
    }
})

// delete board
router.delete("/:slug", auth.verifyToken, async (req, res, next) => {
    try {
        var board = await Board.findOne({ slug: req.params.slug })
        if (board.owner == req.user.userId) {
            board = await Board.findOneAndDelete({ slug: req.params.slug })
            res.json({
                success: 'board deleted successfully '
            })
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router