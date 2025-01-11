import cloudinary from "cloudinary";

function connectcCoudinary() {
  if (typeof window === "undefined") {
    // فقط در محیط سرور Cloudinary را پیکربندی کنید
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }
  console.log("!------- Connected to Cloudinary -------!");
}

export default connectcCoudinary;
