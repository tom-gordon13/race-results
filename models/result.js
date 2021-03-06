const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const exCommentsSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    name: String,
    text: String
},{
    timestamps: true
  })


const resultsSchema = new Schema({
    runner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    raceName: {
        type: String,
        required: false 
    },
    resultDate: {type: Date, required: true},
    distance: {
        type: String, 
        enum: ['1 Mile', '5k', '10k', 'Half Marathon', 'Marathon'],
        required: true
    },
    otherDistance: String,
    finishTime: {
        type: String,
    }, 
    finishHours: {type: Number, required: true},
    finishMinutes: {type: Number, required: true},
    finishSeconds: {type: Number, required: true},
    totalSeconds: Number,
    place: Number,
    focus: {
        type: String,
        enum: ['A', 'B', 'C', '--']
    },
    resultImage: String,
    comments: String,
    exComments: [exCommentsSchema]
},{
    timestamps: true
  })

module.exports = mongoose.model('Result', resultsSchema);