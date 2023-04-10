import * as mongoose from "mongoose"

export const WarriorSchema = new mongoose.Schema({
    faction: {
        type: String,
        require: true
    },
    rank: {
        type: String,
        require: true
    },
    power: {
        type: Number,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    }
}, {timestamps: true, collection: "PR5Warriors"}) 