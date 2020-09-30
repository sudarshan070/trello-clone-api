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

router.put('/:boardSlug/update/:slug', auth.verifyToken, async (req, res, next) => {
    try {
        var board = await Board.findOne({ slug: req.params.slug })
        var list = await List.findOne({ slug: req.params.slug })
        console.log(list, "list is here");

        list = await List.findByIdAndUpdate(
            list.id,
            req.body.list,
            { new: true }
        )
        res.json({ list })
    } catch (error) {
        next(error)
    }
})

router.delete('/:boardSlug/delete/:listSlug', auth.verifyToken, async (req, res, next) => {
    try {
        var list = await List.findOneAndDelete({ slug: req.params.listSlug })
        let board = await Board.findOneAndUpdate(
            { slug: req.params.slug },
            {
                $pull: { lists: list.id },
            },
            { new: true }
        )
        res.json({ success: "List deleted successfully" })
    } catch (error) {
        next(error)
    }
})

module.exports = router