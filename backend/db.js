const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://tummy-solution:pizzachickentikka@cluster0.jvtpoxk.mongodb.net/tummy-solution-mern?retryWrites=true&w=majority";
const mongoDB= async() =>
{
   await mongoose.connect(mongoURI,{useNewUrlParser: true},async (err,result)=>
    {   if (err) console.log("---",err)
        else{
        console.log("connected successfully");
        const fetched_data = await mongoose.connection.db.collection("foodie");
        fetched_data.find({}) .toArray(function(err,data){
            if (err) console.log(err);
            else console.log();
        })
        }
    });

}

module.exports = mongoDB; // wehave to export it only i.e why we not using curly 
