import Image from "next/image";
import logo from "./../../assets/logo.svg";
import { useEffect, useState } from "react";
import Category from "../modules/Category";
import Items from "../modules/Items";
function ArticlesPage({ articles }) {
  return (
    <div className="min-h-screen p-6 space-y-8 text-white bg-gray-900 ">
      <div className="max-w-[1200px] mx-auto">
        {/* <div className="flex flex-col items-center justify-center w-full gap-10 ">
          <Image src={logo} alt="Logo" width={500} />
        </div> */}
        <Category />

        <br />
        <hr />
        <br />
        <br />
        <div className="flex flex-wrap gap-5 w-[100%]">
          {articles.map((item) => (
            <Items key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticlesPage;
