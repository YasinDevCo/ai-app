import React from "react";
import { useRouter } from "next/router";
import pic from "/assets/unnamed 1.png";
import star from "/assets/star.svg";
import arr from "/assets/arrowLeft.svg";
import Image from "next/image";
import p1 from "../../assets/Group 20.png";
import p2 from "../../assets/Group 21.png";
import p3 from "../../assets/Group 22.png";
function index() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-900 rtl">
      {/* Header */}
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <header className="flex flex-row-reverse items-center justify-between py-6 mb-8">
          <div className="flex items-center gap-4">
            <h1 className="hidden text-2xl font-extrabold md:block text-gradient-to-r from-cyan-500 to-blue-500">
              درباره ما
            </h1>
            <Image
              src={pic}
              alt="Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={arr}
              alt="بازگشت"
              width={24}
              height={24}
              className="transition-transform duration-200 cursor-pointer hover:scale-105"
              onClick={handleGoBack}
            />
          </div>
        </header>
        <h2 className="text-3xl font-bold text-right text-gradient-to-r from-green-400 to-teal-500">
          سازندگان
        </h2>
        <br />
        <div className="flex flex-wrap justify-between w-full">
          <div className="flex justify-center w-full p-2 sm:w-1/2 lg:w-1/3">
            <Image src={p1} alt="pic" width={300} />
          </div>
          <div className="flex justify-center w-full p-2 sm:w-1/2 lg:w-1/3">
            <Image src={p2} alt="pic" width={300} />
          </div>
          <div className="flex justify-center w-full p-2 sm:w-1/2 lg:w-1/3">
            <Image src={p3} alt="pic" width={300} />
          </div>
        </div>
        <br />
        <hr className="border-0 h-[1px] bg-gradient-to-r from-black via-gray-600 to-black" />

        {/* Content */}
        <main className="py-8 space-y-6 text-right">
          <h2 className="text-3xl font-bold text-right text-gradient-to-r from-green-400 to-teal-500">
            توضیحات وبسایت
          </h2>

          <p className="leading-relaxed text-justify text-gray-300" dir="rtl">
            لیست ابزار های هوش مصنوعی که در دانشگاه ملی مهارت اصفهان تولید شده
            است، می‌تواند به عنوان یک پلتفرم جامع برای دسته‌بندی، جستجو و نمایش
            اطلاعات مرتبط با وبسایت‌های مختلف طراحی شود. این وبسایت می‌تواند با
            هدف ارائه خدمات به دانشجویان، اساتید و مخاطبان عمومی در حوزه‌های
            متنوع ایجاد شده باشد.
          </p>

          <section className="space-y-4">
            <h3
              dir="rtl"
              className="text-xl font-semibold text-gradient-to-r from-purple-400 to-pink-500"
            >
              دسته‌بندی وبسایت‌ها:
            </h3>
            <p className="text-gray-400" dir="rtl">
              امکان نمایش وبسایت‌ها بر اساس موضوعات مختلف مانند آموزش، فناوری،
              طراحی، خدمات آنلاین و غیره.
            </p>

            <h3
              dir="rtl"
              className="text-xl font-semibold text-gradient-to-r from-orange-400 to-yellow-500"
            >
              امکان جستجو:
            </h3>
            <p dir="rtl" className="text-gray-400">
              کاربران می‌توانند با استفاده از کلمات کلیدی، موضوعات یا
              دسته‌بندی‌ها، وبسایت‌های مورد نظر خود را به سرعت پیدا کنند.
            </p>

            <h3
              dir="rtl"
              className="text-xl font-semibold text-gradient-to-r from-blue-400 to-indigo-500"
            >
              صفحه توضیحات وبسایت‌ها:
            </h3>
            <p dir="rtl" className="text-gray-400">
              هر وبسایت در یک صفحه اختصاصی توضیح داده می‌شود که شامل اطلاعاتی
              مانند نام، توضیحات، آدرس وبسایت، رتبه‌بندی کاربران و نظرات است.
            </p>

            <h3
              dir="rtl"
              className="text-xl font-semibold text-gradient-to-r from-green-400 to-cyan-500"
            >
              رابط کاربری جذاب:
            </h3>
            <p dir="rtl" className="text-gray-400">
              طراحی مدرن و کاربرپسند که تجربه کاربری روانی را برای مخاطبان فراهم
              می‌کند.
            </p>
          </section>
        </main>

        <hr className="my-8 border-0 h-[1px] bg-gradient-to-r from-black via-gray-600 to-black" />
      </div>
    </div>
  );
}

export default index;
