// this file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaskManager', {useNewUrlParser: true}).them(() => {
    console.log("Connected to MongoDB successfully :) ");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

//to prevent deprecation warnings (From MongoDB native driver)
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

module.exports = {
    mongoose
};