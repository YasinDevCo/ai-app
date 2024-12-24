import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import pic from "/assets/unnamed 1.png";
import star from "/assets/star.svg";
import arr from "/assets/arrowLeft.svg";
import pic2 from "/assets/Rectangle 2.png";
import lessone from "/assets/lessone.svg";
import vecBtn from "/assets/vectorbtn.svg";
import { ScaleLoader } from "react-spinners";
// import AudioPlayer from "../modules/AudioPlayer";

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query; // Destructure the `id` from the query string

  const [article, setArticle] = useState(null); // State to store article data
  const [isPlaying, setIsPlaying] = useState(false);

  // Fetch article data when `id` changes
  useEffect(() => {
    if (id) {
      fetch(`/api/articles/${id}`)
        .then((response) => response.json())
        .then((data) => setArticle(data))
        .catch((error) => console.error("Error fetching article:", error));
    }
  }, [id]); // Re-run the effect when `id` changes

  const handlePlayPause = () => {
    const videoElement = document.getElementById("videoElement");
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-gray-900">
        <ScaleLoader
          color="rgba(255, 255, 255, 1)"
          height={140}
          width={12}
          margin={10}
        />
      </div>
    ); // Show loading state while data is being fetched
  }

  return (
    <div className="min-h-screen text-white bg-gray-900 ">
      {/* هدر */}
      <div className="max-w-[1200px] mx-auto ">
        <header className="flex flex-row-reverse items-center justify-between p-4 mb-10 ">
          <div className="flex items-center gap-5">
          <h1 className="hidden text-2xl font-bold md:block">{article.title}</h1>
          <Image src={pic} alt="Logo" width={80} height={80} />
          </div>
          <div className="flex items-center gap-10">
            <Image
              src={arr}
              alt="بازگشت"
              width={21}
              className="cursor-pointer"
              onClick={handleGoBack}
            />
            <div className="flex items-center px-5 py-2 text-xl border rounded-[20px] gap-3">
              {article.status}
              <Image src={star} alt="Star" width={20} height={20} />
            </div>
          </div>
        </header>

        {/* تصویر مقاله */}
        <section>
          <Image src={pic2} alt="مقاله" width={1200} height={600} />
        </section>
        <hr className="my-12 w-full h-[1px] border-0 bg-gradient-to-r from-black via-gray-600 to-black" />

        {/* توضیحات */}
        <section className="px-4">
          <div className="flex items-center justify-between">
            <Image
              src={lessone}
              alt="آیکون"
              height={80}
              className="cursor-pointer"
            />
            {/* <AudioPlayer/> */}
            <h2 className="text-2xl">{article.title}</h2>
          </div>
          <p className="mt-10 text-justify text-gray-400" dir="rtl">
            {article.content}
          </p>
        </section>

        {/* ویدیو پلیر */}
        <main className="p-4">
          <section className="relative bg-gray-800 rounded-lg h-82">
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={handlePlayPause}
            >
              <div className="absolute inset-0 bg-gray-900 rounded-lg opacity-50"></div>
              <button className="z-10 p-4 bg-white rounded-full">
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-gray-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 5.25v13.5M17.25 5.25v13.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-gray-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <video
              id="videoElement"
              src={article.video_url} // Dynamically set the video source from the article
              className="w-full h-full rounded-lg"
              controls
            ></video>
          </section>

          {/* دکمه امتحان کردن */}
          <section className="flex justify-center w-full ">
            <button
              onClick={() => alert("در حال آزمایش...")}
              className="flex items-center justify-between gap-3 p-2 my-10 space-x-2 text-white rounded-xl bg-custom-gradient hover:opacity-90"
            >
              <span className="flex justify-center items-center rounded-full bg-custom-gradient2 h-[35px] w-[35px]">
                <Image src={vecBtn} alt="" className="w-[20px] h-[20px]" />
              </span>
              <span>امتحان کردن</span>
            </button>
          </section>
        </main>

        {/* فوتر */}
        <footer className="p-4 mt-4 text-center text-gray-500 bg-gray-800">
          <p>&copy; 2024 هوش مصنوعی لئوناردو. تمامی حقوق محفوظ است.</p>
        </footer>
      </div>
    </div>
  );
};

export default DetailsPage;
