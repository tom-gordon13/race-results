const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const exCommentsSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
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
    }, {
        timestamps: true
});

module.exports = mongoose.model('User', userSchema);