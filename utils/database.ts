import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected) return;

  try{

    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "heyprompt"
    });

    isConnected = true;

    console.log("Connected to MongoDB");

  }catch(error) {
    console.log(error);
  }

}