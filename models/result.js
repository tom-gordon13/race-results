const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultsSchema = new Schema({
    runner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    distance: {
        type: String, 
        enum: ['1 Mile', '5k', '10k', 'Half Marathon', 'Marathon', 'Other'],
        require: true
    },
    otherDistance: String,
    finishTime: {
        type: String,
    }, 
    race: {type: Schema.Types.ObjectId, required: true},
    place: Number
})

module.exports = mongoose.model('Result', resultsSchema);