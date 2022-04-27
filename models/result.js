const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const resultsSchema = new Schema({
    runner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    // runnerName: {type: String, required: true},
    // race: {type: Schema.Types.ObjectId},
    raceName: {
        type: String,
        require: false
    },
    resultDate: {type: Date, required: true},
    distance: {
        type: String, 
        enum: ['1 Mile', '5k', '10k', 'Half Marathon', 'Marathon'],
        require: true
    },
    finishTime: {
        type: String,
        required: true
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
    resultImage: {
        type: String,
        match: /.{1,}/
    },
    comments: String
},{
    timestamps: true
  })

module.exports = mongoose.model('Result', resultsSchema);