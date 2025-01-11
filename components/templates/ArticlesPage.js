import { useState } from "react";
import Items from "../modules/Items";
import Image from "next/image";
import cat1 from "../../assets/cat1.svg";
import cat2 from "../../assets/cat2.svg";
import cat3 from "../../assets/cat3.svg";
import cat4 from "../../assets/cat4.svg";

const categories = [
  {
    title: "کدنویسی",
    color:
      "linear-gradient(180deg, rgba(177,181,192,1) 0%, rgba(242,113,57,1) 57%)",
    icon: cat2,
    category_item: "code",
  },
  {
    title: "دستیار",
    color:
      "linear-gradient(180deg, rgba(177,181,192,1) 0%, rgba(57,242,174,1) 57%)",
    icon: cat3,
    category_item: "hand",
  },
  {
    title: "ویدیو",
    color:
      "linear-gradient(180deg, rgba(177,181,192,1) 0%, rgba(125,57,242,1) 57%)",
    icon: cat1,
    category_item: "video",
  },
  {
    title: "تصویر",
    color:
      "linear-gradient(180deg, rgba(177,181,192,1) 0%, rgba(233,242,57,1) 57%)",
    icon: cat4,
    category_item: "pic",
  },
];

function ArticlesPage({ articles }) {
  console.log(articles);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((item) => item.category_item === selectedCategory);

  return (
    <div className="min-h-screen p-6 space-y-8 text-white bg-gray-900">
      <div className="max-w-[1200px] mx-auto">
        <h3 className="my-6 text-4xl text-center text-transparent transition-all duration-700 transform shadow-2xl sm:text-5xl md:text-6xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text font-extralight animate-pulse-move hover:scale-105 hover:rotate-3 hover:shadow-3xl hover:text-rose-400">
          دسته‌بندی‌ها
        </h3>
        {/* دسته‌بندی‌ها */}
        <div className="flex flex-row-reverse flex-wrap justify-center gap-4 mb-8 sm:gap-6">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`flex flex-col items-center gap-2 p-4 rounded-full shadow-lg w-[80px] sm:w-[100px] lg:w-[120px] ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-gray-800 text-gray-300"
            } hover:scale-110 transition-all`}
          >
            <span className="flex items-center justify-center h-full text-sm font-bold text-center sm:text-lg">
              همه
            </span>
          </button>

          {categories.map((category) => (
            <button
              key={category.category_item}
              onClick={() => setSelectedCategory(category.category_item)}
              style={{
                background:
                  selectedCategory === category.category_item
                    ? category.color
                    : "linear-gradient(180deg, rgba(77,77,77,1) 0%, rgba(33,33,33,1) 57%)",
              }}
              className={`flex flex-col items-center gap-2 p-4 rounded-full shadow-lg w-[80px] sm:w-[100px] lg:w-[120px] hover:scale-110 transition-all`}
            >
              <Image
                src={category.icon}
                alt={category.title}
                width={40}
                height={40}
              />
              <span className="text-sm font-bold text-white sm:text-lg">
                {category.title}
              </span>
            </button>
          ))}
        </div>

        {/* نمایش مقالات */}
        <div className="flex flex-wrap gap-5 w-[100%]">
          {filteredArticles.map((item) => (
            <Items key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticlesPage;
