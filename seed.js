// seed.js (a utility to seed/initialize the database)

// Uncomment the next line if using a .env to hold the db connection string
require('dotenv').config();

// Connect to the db
require('./config/database');

const Movie = require('./models/movie');
const Performer = require('./models/performer');

// For better organization, the see data is being stored in a separate data.js module
const data = require('./data');

const p1 = Movie.deleteMany({});
const p2 = Performer.deleteMany({});  