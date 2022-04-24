const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultsSchema = new Schema({
    runner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    // runnerName: {type: String, required: true},
    race: {type: Schema.Types.ObjectId},
    resultDate: {type: Date, required: true},
    distance: {
        type: String, 
        enum: ['1 Mile', '5k', '10k', 'Half Marathon', 'Marathon', 'Other'],
        require: true
    },
    otherDistance: String,
    finishTime: {
        type: String,
    }, 
    place: Number,
    focus: {
        type: String,
        enum: ['A', 'B', 'C', '--']
    },
    comments: String
},{
    timestamps: true
  })

module.exports = mongoose.model('Result', resultsSchema);