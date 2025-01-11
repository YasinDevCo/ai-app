import Image from "next/image";
import Link from "next/link";
import star from "../../assets/star.svg";
import chatgpt from "../../assets/images/logo/chatgpt.webp";
import claude from "../../assets/images/logo/claude.svg";
import krea from "../../assets/images/logo/krea.svg";
import leonardo from "../../assets/images/logo/leonardo.ai.svg";
import runway from "../../assets/images/logo/runway.svg";

function Items({ item }) {
  const { title, _id, status, category_item, logo } = item;

  // تعیین بک‌گراند بر اساس category_item
  const backgroundClass = {
    video: "bg-background-image-1",
    code: "bg-background-image-2",
    hand: "bg-background-image-3",
    pic: "bg-background-image-4",
  }[category_item] || "bg-background-image";

  // انتخاب لوگوی مناسب بر اساس logo
  const logos = {
    chatgpt,
    claude,
    krea,
    leonardo,
    runway,
  };

  return (
    <Link
      href={`articles/${_id}`}
      className={`relative w-full sm:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%] h-[154px] ${backgroundClass} bg-cover border border-[#343434] rounded-[30px] cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl`}
    >
      <div className="relative w-full h-full">
        {/* نمایش وضعیت */}
        <span className="flex gap-3 flex-row-reverse justify-between items-center w-auto border-[0.5px] border-solid border-[#797979] rounded-lg px-2 py-1 absolute left-3 top-3 text-sm z-10">
          <Image src={star} alt="star" width={14} />
          {status=="free" && "رایگان"}
          {status=="buy" && "خرید اشتراک"}
        </span>

        {/* گرادینت پس‌زمینه */}
        <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        {/* نمایش لوگو در گوشه پایین */}
        {logos[logo] && (
          <Image
            className="absolute right-3 bottom-3"
            src={logos[logo]}
            alt={logo}
            width={90}
            height={90}
          />
        )}

        {/* عنوان آیتم */}
        <span className="absolute z-10 text-2xl font-bold text-white sm:text-xl md:text-lg right-3 top-3">
          {title}
        </span>
      </div>
    </Link>
  );
}

export default Items;
