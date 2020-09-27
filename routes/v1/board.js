const express = require('express');
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




module.exports = router