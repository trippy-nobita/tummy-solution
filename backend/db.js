const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://tummy-solution:pizzachickentikka@cluster0.jvtpoxk.mongodb.net/tummy-solution-mern?retryWrites=true&w=majority";

const mongoDB = async() => {
    return new Promise((resolve, reject) => {
        mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log("Connected to MongoDB successfully");
                resolve();
            })
            .catch(error => {
                console.error("Error connecting to MongoDB:", error);
                reject(error);
            });
    });
};

module.exports = mongoDB;