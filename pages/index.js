import Link from "next/link";
import logo from "./../assets/logo.svg";
import Image from "next/image";
import ys from "../assets/yelowStar.svg";
import ps from "../assets/perperStar.svg";
import uni from "../assets/National_University_of_Skills copy 2.png";
import { useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // شبیه‌سازی زمان لودینگ
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // لودینگ برای ۲ ثانیه

    return () => clearTimeout(timer); // تمیز کردن تایمر در صورت ان‌ماونت شدن
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-gray-900">
        <ScaleLoader
          color="rgba(255, 255, 255, 1)"
          height={140}
          width={12}
          margin={10}
        />
      </div>
    );
  }

  return (
    <>
      <section className="w-screen h-screen bg-bottom bg-cover bg-background-image md:bg-center md:bg-no-repeat ">
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center gap-10">
            {" "}
            {/* مرکز وسط */}
            <Image
              src={logo}
              alt="Logo"
              className="w-[400px] md:w-[500px] lg:w-[600px]" // سایز لوگو ریسپانسیو
              priority // افزایش اولویت لود لوگو
            />
            <div className="flex flex-col items-center w-full gap-5 md:flex-row md:w-auto">
              {/* دکمه‌ها */}
              <Link href={"/articles"}>
                <button className="flex items-center justify-between   py-3 px-10 text-lg md:text-2xl border-[0.1px] text-white border-white font-thin rounded-[20px] gap-3 w-full md:w-auto min-w-[300px] hover:bg-white hover:text-black transition duration-300">
                  لیست هوش مصنوعی ها
                  <Image src={ps} alt="Purple Star" width={30} height={30} />
                </button>
              </Link>
              <Link href={"/about-us"}>
                <button className="flex items-center justify-between   py-3 px-10 text-lg md:text-2xl border-[0.1px] text-white border-white font-thin rounded-[20px] gap-3 w-full md:w-auto min-w-[300px] hover:bg-white hover:text-black transition duration-300">
                  درباره ما
                  <Image src={ys} alt="Yellow Star" width={30} height={30} />
                </button>
              </Link>
            </div>
            <Link href={"https://mohajer.nus.ac.ir/"}>
              <Image src={uni} alt="University Logo" className="mt-10" />
            </Link>
            {/* فاصله اضافه‌شده */}
          </div>
        </div>
      </section>
    </>
  );
}
