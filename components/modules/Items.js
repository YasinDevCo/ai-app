import Image from "next/image";
import Link from "next/link";
import star from "./../../assets/star.svg";
import unnamed from "./../../assets/unnamed 1.png";

function Items({ item }) {
  const { title, id, status, category_item } = item;

  // انتخاب بکگراند بر اساس category_item
  let backgroundClass = "";

  switch (category_item) {
    case "video":
      backgroundClass = "bg-background-image-1"; // برای category_item برابر 1
      break;
    case "code":
      backgroundClass = "bg-background-image-2"; // برای category_item برابر 2
      break;
    case "hand":
      backgroundClass = "bg-background-image-3"; // برای category_item برابر 3
      break;
    case "pic":
      backgroundClass = "bg-background-image-4"; // برای category_item برابر 4
      break;
    default:
      backgroundClass = "bg-background-image"; // مقدار پیش‌فرض
      break;
  }

  return (
    <Link
      href={`articles/${id}`}
      className={`relative w-full sm:w-[48%] lg:w-[48%] xl:w-[48%] 2xl:w-[48%] h-[154px] ${backgroundClass} bg-cover border border-[#343434] rounded-[30px] cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl`}
    >
      <div className="relative w-full h-full">
        {/* وضعیت */}
        <span className="flex gap-3 flex-row-reverse justify-between items-center w-auto border-[0.5px] border-solid border-[#797979] rounded-lg px-2 py-1 absolute left-3 top-3 text-sm z-10">
          <Image src={star} alt="star" width={14} />
          {status}
        </span>

        {/* تصویر پس‌زمینه */}
        <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <Image
          className="absolute right-3 bottom-3"
          src={unnamed}
          alt="unnamed"
          width={90}
          height={90}
        />

        {/* عنوان */}
        <span className="absolute z-10 text-2xl font-bold text-white sm:text-xl md:text-lg right-3 top-3">
          {title}
        </span>
      </div>
    </Link>
  );
}

export default Items;
