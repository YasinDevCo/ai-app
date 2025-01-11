import cloudinary from 'cloudinary';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// تنظیمات Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// تنظیمات multer برای ذخیره‌سازی موقت فایل‌ها
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // استفاده از timestamp برای نام‌گذاری فایل
  },
});

const upload = multer({ storage: storage });

export const config = {
  api: {
    bodyParser: false, // برای استفاده از multer باید این را false قرار دهید
  },
};

const handler = async (req, res) => {
  upload.single('file')(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: "Upload failed", details: err.message });
    }

    // بارگذاری تصویر به Cloudinary
    try {
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: 'my_app', // مسیر ذخیره در Cloudinary
      });

      // حذف فایل از سرور محلی بعد از آپلود به Cloudinary
      fs.unlinkSync(req.file.path);

      res.status(200).json({ message: "Upload successful", data: result });
    } catch (error) {
      res.status(500).json({ error: "Cloudinary upload failed", details: error.message });
    }
  });
};

export default handler;
