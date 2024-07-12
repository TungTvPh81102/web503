import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/WEB503");
    console.log("Connect DB successfully");
  } catch (error) {
    console.log(error);
  }
};
 