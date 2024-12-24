import React from "react";
import cat1 from "../../assets/cat1.svg";
import cat2 from "../../assets/cat2.svg";
import cat3 from "../../assets/cat3.svg";
import cat4 from "../../assets/cat4.svg";
import Image from "next/image";
const categories = [
  {
    title: "طراحی سایت و کدنویسی",
    color:
      " linear-gradient(180deg, rgba(177,181,192,1) 0%, rgba(242,113,57,1) 57%)",
    icon: cat4,
  },
  {
    title: "محتوای متنی و دستیار",
    color:
      "linear-gradient(180deg, rgba(177,181,192,1) 0%, rgba(57,242,174,1) 57%)",
    icon: cat3,
  },
  {
    title: "تولید ویدیو",
    color:
      "linear-gradient(180deg, rgba(177,181,192,1) 0%, rgba(125,57,242,1) 57%)",
    icon: cat2,
  },
  {
    title: "تولید تصویر",
    color:
      "linear-gradient(180deg, rgba(177,181,192,1) 0%, rgba(233,242,57,1) 57%)",
    icon: cat1,
  },
];

function Category() {
  return (
    <div className="flex flex-col w-full gap-10 px-4">
     <h3 className="my-6 text-4xl text-center text-transparent transition-all duration-700 transform shadow-2xl sm:text-5xl md:text-6xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text font-extralight animate-pulse-move hover:scale-105 hover:rotate-3 hover:shadow-3xl hover:text-rose-400">
  دسته‌بندی‌ها
</h3>

      <div className="flex flex-wrap justify-center gap-5 mb-16">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative flex items-center px-4 py-3 text-sm md:text-base font-semibold text-gray-900 rounded-[50px] w-[120px] h-[120px] md:w-[160px] md:h-[150px]"
            style={{ background: cat.color }}
          >
            <Image
              className="absolute top-[-30px] right-[-30px] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] xs:w-[60px] xs:h-[60px]"
              src={cat.icon}
              alt={`${cat.title} icon`}
            />

            <span className="mt-6 font-normal text-center text-xm md:text-xl">
              {cat.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
