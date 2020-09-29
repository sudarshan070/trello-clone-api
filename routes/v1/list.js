var express = require('express')
var router = express.Router()

var slug = require('slug')
var Board = require('../../models/boards')
var List = require('../../models/list')
var Team = require('../../models/team')
var User = require('../../models/users')
var auth = require('../../middleware/auth')

router.post("/:boardSlug/create", auth.verifyToken, async (req, res, next) => {
    try {

        console.log('in list route');
        var boardSlug = req.params.boardSlug
            req.body.list.memberId = req.user.userId
        let board = await Board.findOne({ slug: boardSlug })
            let boardId = board.id
            req.body.list.boardId = boardId
        var list = await List.create(req.body.list)
        console.log(list, "list is here")
            if (list) {
                let board = await Board.findByIdAndUpdate(
                    boardId,
                    {
                        $addToSet: { lists: list.id },
                    },
                    { new: true }
                );
            }
            return res.status(200).json({ list })
    } catch (error) {
        next(error)
    }
})

module.exports = router