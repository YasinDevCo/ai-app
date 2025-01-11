import mongoose from "mongoose";
// import connectcCoudinary from "./connectcCoudinary";

async function connectDB() {
  if (typeof window !== "undefined") {
    // در محیط مرورگر، از mongoose استفاده نکنید
    return;
  }

  if (mongoose.connections[0].readyState) return;

  mongoose.set("strictQuery", false); // فقط در سمت سرور استفاده کنید

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // مدت زمان برای انتخاب سرور
      connectTimeoutMS: 10000, // مدت زمان اتصال
    });
    console.log("!------- Connected to DB -------!");

    // connectcCoudinary();
    // console.log("!------- Connected to Cloudinary -------!");
  } catch (err) {
    console.error("!------- Error connecting to DB or Cloudinary -------!", err);
  }
}

export default connectDB;
