import mongoose from "mongoose";

const connectDB= (async)=>{
    const uri="mongodb://127.0.0.1:27017";
    mongoose
    .connect(uri,
        {
            autoCreate:true,
            autoIndex:true,
        })
        .then((res)=>{
            console.log("DB Connection");
        })
        .catch((err)=>{
            console.log("Error connecting");
        });

};

export default connectDB;