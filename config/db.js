import mongoose from "mongoose";

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DB is connected.");
  }catch(err){
    console.log("MongoDB Error : " ,err.message);
    process.exit(1);
  }
};

export default connectDB;