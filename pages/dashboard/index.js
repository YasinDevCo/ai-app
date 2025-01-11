import dynamic from "next/dynamic";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function ArticleForm() {
  const initialFormData = {
    title: "",
    content: "",
    category_item: "",
    logo: "",
    main_image_1: "",
    train: "",
    status: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContentChange = (value) => {
    setFormData((prevState) => ({ ...prevState, content: value }));
  };

  const showToast = (message, type = "success") => {
    toast[type](message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // const handleImageChange = async (e) => {
  //   const formData = new FormData();
  //   formData.append("file", e.target.files[0]); // نام فیلد باید "file" باشد

  //   try {
  //     const response = await fetch("/api/upload", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const result = await response.json();

  //     if (response.ok) {
  //       // پس از آپلود موفق، URL تصویر را به فرم اضافه می‌کنیم
  //       setFormData({
  //         ...formData,
  //         main_image_1: result.data.url, // URL تصویر را ذخیره می‌کنیم
  //       });
  //       toast.success("تصویر با موفقیت آپلود شد!");
  //     } else {
  //       toast.error(`خطا: ${result.error}`);
  //     }
  //   } catch (error) {
  //     console.error("Upload error:", error);
  //     toast.error("مشکلی در آپلود تصویر پیش آمده است.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "خطایی رخ داده است");
      }

      showToast("مقاله با موفقیت ثبت شد!");
      setFormData(initialFormData);
    } catch (err) {
      showToast(`خطا: ${err.message}`, "error");
    }
  };
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // هدرها
      [{ font: [] }], // فونت‌ها
      [{ size: ['small', false, 'large', 'huge'] }], // اندازه فونت‌ها
      ['bold', 'italic', 'underline', 'strike'], // استایل‌های متن
      [{ color: [] }, { background: [] }], // رنگ متن و پس‌زمینه
      [{ script: 'sub' }, { script: 'super' }], // زیرنویس و بالانویس
      [{ list: 'ordered' }, { list: 'bullet' }], // لیست‌ها
      [{ indent: '-1' }, { indent: '+1' }], // تورفتگی
      [{ direction: 'rtl' }], // راست‌چین
      [{ align: [] }], // تنظیم چیدمان
      ['link', 'image', 'video'], // لینک، تصویر و ویدیو
      ['blockquote', 'code-block'], // نقل قول و کد
      [{ 'table': 'insertTable' }], // جداول (در صورت نیاز)
      ['clean'], // پاک‌سازی استایل‌ها
    ],
  };

  const formats = [
    'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'color', 
    'background', 'script', 'list', 'bullet', 'indent', 'direction', 'align', 
    'link', 'image', 'video', 'blockquote', 'code-block', 'table'
  ];
  return (  
    <div className="w-full h-full bg-gray-900">
      <div className="max-w-3xl p-6 mx-auto text-right text-white bg-gray-900 rounded-md shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-gray-100">ثبت مقاله جدید</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-400">عنوان</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-20">
            <label className="block mb-2 font-medium text-gray-400">محتوا</label>
            <ReactQuill
              theme="snow"
              value={formData.content}
              onChange={handleContentChange}
              modules={modules}
              formats={formats}
              style={{ height: '200px' ,direction:"rtl"}}
            />
          </div>
          <div className="mb-4 ">
            <label className="block mb-2 font-medium text-gray-400">دسته‌بندی</label>
            <select
              name="category_item"
              value={formData.category_item}
              onChange={handleChange}
              required
              className="w-full p-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">انتخاب دسته‌بندی مرتبط</option>
              <option value="code">طراحی سایت و کدنویسی</option>
              <option value="hand">محتوای متنی و دستیار</option>
              <option value="video">تولید ویدیو</option>
              <option value="pic">تولید تصویر</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-400">آدرس لوگو</label>
            <input
              type="text"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              required
              className="w-full p-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-400">آدرس تصویر اصلی</label>
            <input
              type="text"
              name="main_image_1"
              value={formData.main_image_1}
              onChange={handleChange}
              required
              className="w-full p-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* <label>تصویر اصلی:</label>
            <input
              type="file"
              name="main_image_1"
              onChange={handleImageChange}
            /> */}
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-400">اطلاعات مرتبط</label>
            <input
              type="text"
              name="train"
              value={formData.train}
              onChange={handleChange}
              className="w-full p-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-400">وضعیت</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="w-full p-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">انتخاب وضعیت</option>
              <option value="free">رایگان</option>
              <option value="buy">خرید اشتراک</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            ثبت مقاله
          </button>
        </form>
      </div>
    </div>
  );
}

export default ArticleForm;
