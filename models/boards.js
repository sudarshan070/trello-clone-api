var mongoose = require("mongoose")
var slug = require("slug")

var Schema = mongoose.Schema

let boardSchema = new Schema({
    name: {
        type: String,
    },
    slug: {
        type: String
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    teamId: [{
        type: Schema.Types.ObjectId,
        ref: "Team"
    }],
    images: {
        type: String
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    isPublic: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

boardSchema.pre('save', async function (next) {
    try {
        if (this.name) {
            var slugName = slug(this.name, { lower: true })
            this.slug = slugName;
        }
    } catch (error) {
        next(error)
    }
})

module.exports = mongoose.model("Board", boardSchema);
