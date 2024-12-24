import pic1 from "../../assets/pic1.svg";
import unnamed from "./../../assets/unnamed 1.png";
import star from "./../../assets/star.svg";
import { useNavigate } from "react-router-dom";

function Items({ data }) {
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/articles/${id}`); // به آدرس مربوط به هر آیتم هدایت می‌شود
  };

  return (
    <div className="flex flex-wrap gap-5 w-[100%]">
      {data.map((data) => (
        <div
          key={data.id}
          className="relative w-[49%] h-[154px] bg-gradient-to-r border border-[#343434] rounded-[30px] from-customGray1 via-customGray2 to-customGray1 cursor-pointer"
          onClick={() => handleItemClick(data.id)}
        >
          <span className="flex flex-row-reverse justify-between items-center w-[70px] border-[0.5px] border-solid border-[#797979] rounded-lg p-1 absolute right-3 top-3 text-sm">
            رایگان <img src={star} alt="" />
          </span>
          <img className="absolute left-3 bottom-3" src={unnamed} alt="" />
          <span className="absolute text-2xl left-3 top-3">{data.title}</span>
        </div>
      ))}
    </div>
  );
}

export default Items;
