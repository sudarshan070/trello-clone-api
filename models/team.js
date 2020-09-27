var mongoose = require("mongoose");
var Schema = mongoose.Schema

let teamSchema = new Schema({
    name: {
        type: String,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    type: {
        type: String
    },
    slug: {
        type: String
    },
    description: {
        type: String
    },
    isPublic: {
        type: Boolean,
        default: false
    },
    boardId: [{
        type: Schema.Types.ObjectId,
        ref: "Board"
    }]
}, { timestamps: true })

teamSchema.pre('save', async function (next) {
    try {
        if (this.name) {
            var slugName = slug(this.name, { lower: true })
            this.slug = slugName;
        }
    } catch (error) {
        next(error)
    }
})

module.exports = mongoose.model("Team", teamSchema);