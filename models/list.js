var mongoose = require("mongoose")
var slug = require("slug")

var Schema = mongoose.Schema

var listSchema = new Schema({
    name: {
        type: String
    },
    slug: {
        type: String
    },
    boardId: {
        type: Schema.Types.ObjectId,
        ref: "Board"
    },
    memberId: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
})

listSchema.pre('save', async function (next) {
    try {
        if (this.name) {
            var listSlugName = slug(this.name, { lower: true })
            this.slug = listSlugName;
        }
    } catch (error) {
        next(error)
    }
})

module.exports = mongoose.model("List", listSchema);