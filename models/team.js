var mongoose = require("mongoose")

var Schema = mongoose.Schema

let teamSchema = new Schema({
    name: {
        type: String,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    images: {
        type: String
    },
    members: [{ type: Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true })

module.exports = mongoose.model("Team", teamSchema);