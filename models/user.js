const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const resultsSchema = new Schema({
    runner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    // runnerName: {type: String, required: true},
    // race: {type: Schema.Types.ObjectId},
    raceName: String,
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
    comments: String
},{
    timestamps: true
  })



const userSchema = new Schema({
    name: String,
    googleId:{
        type: String,
        require: true
    },
    email: String,
    avatar: String,
    city: String,
    state: {
        type: String,
        match: /[A-Z]{2}/
    },
    zipCode: {
        type: Number,
        match: /d{5}/
    }, 
    results: [resultsSchema]
    }, {
        timestamps: true
});

module.exports = mongoose.model('User', userSchema);