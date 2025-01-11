import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import pic from "/assets/unnamed 1.png";
import star from "/assets/star.svg";
import arr from "/assets/arrowLeft.svg";
import lessone from "/assets/lessone.svg";
import vecBtn from "/assets/vectorbtn.svg";
import { ScaleLoader } from "react-spinners";
import DOMPurify from "dompurify";

import chatgptLogo from "../../assets/images/logo/chatgpt.webp";
import chatgptMain from "../../assets/images/main/chatgpt.png";

import claudeLogo from "../../assets/images/logo/claude.svg";
import claudeMain from "../../assets/images/main/claude.png";

import kreaLogo from "../../assets/images/logo/krea.svg";
import kreaMain from "../../assets/images/main/krea.png";

import leonardoLogo from "../../assets/images/logo/leonardo.ai.svg";
import leonardoMain from "../../assets/images/main/leonardo.png";

import runwayLogo from "../../assets/images/logo/runway.svg";
import runwayMain from "../../assets/images/main/runway.png";
import YouTubePlayer from "../modules/YouTubePlayer";

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get `id` from the query string
  const [article, setArticle] = useState(null); // State to store article data
  const [isPlaying, setIsPlaying] = useState(false); // For controlling audio play/pause
  const [loading, setLoading] = useState(true); // Loading state for better UX
  const { logo, main_image_1 } = article || {}; // Safely destructure only if article exists

  const audioRef = useRef(null); // Ref for audio element

  const logos = {
    chatgptLogo,
    claudeLogo,
    kreaLogo,
    leonardoLogo,
    runwayLogo,
  };

  const main = {
    chatgptMain,
    claudeMain,
    kreaMain,
    leonardoMain,
    runwayMain,
  };

  const videoId = {
    chatgpt: "AXn2XVLf7d0",
    claude: "J3X_JWQkvo8",
    krea: "TZbmkQrsKmM",
    leonardo: "dqJtSmYhzDs",
    runway: "CrvraynXNe4",
  };

  // Fetch article data when `id` changes
  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`/api/articles/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setArticle(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching article:", error);
          setLoading(false);
        });
    }
  }, [id]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  if (loading) {
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

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-gray-900">
        <p>مقاله‌ای یافت نشد.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white bg-gray-900">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto">
        <header className="flex flex-row-reverse items-center justify-between p-4 mb-10">
          <div className="flex items-center gap-5">
            <h1 className="hidden text-2xl font-bold md:block">
              {article.title}
            </h1>

            {logo === "chatgpt" && (
              <Image src={chatgptLogo} alt="Logo" width={80} height={80} />
            )}
            {logo === "claude" && (
              <Image src={claudeLogo} alt="Logo" width={80} height={80} />
            )}
            {logo === "krea" && (
              <Image src={kreaLogo} alt="Logo" width={80} height={80} />
            )}
            {logo === "leonardo" && (
              <Image src={leonardoLogo} alt="Logo" width={80} height={80} />
            )}
            {logo === "runway" && (
              <Image src={runwayLogo} alt="Logo" width={80} height={80} />
            )}
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
              {article.status === "free" && "رایگان"}
              {article.status === "buy" && "خرید اشتراک"}
              <Image src={star} alt="Star" width={20} height={20} />
            </div>
          </div>
        </header>

        {/* Article Image */}
        <section>
          {main_image_1 === "chatgpt" && (
            <Image src={chatgptMain} alt="مقاله" width={1200} height={600} />
          )}
          {main_image_1 === "claude" && (
            <Image src={claudeMain} alt="مقاله" width={1200} height={600} />
          )}
          {main_image_1 === "krea" && (
            <Image src={kreaMain} alt="مقاله" width={1200} height={600} />
          )}
          {main_image_1 === "leonardo" && (
            <Image src={leonardoMain} alt="مقاله" width={1200} height={600} />
          )}
          {main_image_1 === "runway" && (
            <Image src={runwayMain} alt="مقاله" width={1200} height={600} />
          )}
        </section>
        <hr className="my-12 w-full h-[1px] border-0 bg-gradient-to-r from-black via-gray-600 to-black" />

        {/* Content */}
        <section className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={lessone}
                alt="آیکون"
                height={80}
                className="cursor-pointer"
                onClick={handlePlayPause} // Play/Pause audio on click
              />
              <audio ref={audioRef} style={{ display: "none" }}>
                <source src="/audio/runway.mp3" type="audio/mp3" />
                مرورگر شما از تگ صوتی پشتیبانی نمی‌کند.
              </audio>
            </div>
            <h2 className="text-2xl">{article.title}</h2>
          </div>
          <p className="mt-10 text-justify text-gray-400" dir="rtl">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(article.content),
              }}
            ></div>
          </p>
        </section>

        {/* Video Player */}
        <main className="p-4">
          {logo === "chatgpt" && <YouTubePlayer videoId={videoId.chatgpt} />}
          {logo === "claude" && <YouTubePlayer videoId={videoId.claude} />}
          {logo === "krea" && <YouTubePlayer videoId={videoId.krea} />}
          {logo === "leonardo" && <YouTubePlayer videoId={videoId.leonardo} />}
          {logo === "runway" && <YouTubePlayer videoId={videoId.runway} />}

          {/* Try Button */}
          <section className="flex justify-center w-full">
            <a href={article.train}>
              <button className="flex items-center justify-between gap-3 p-2 my-10 space-x-2 text-white rounded-xl bg-custom-gradient hover:opacity-90">
                <span className="flex justify-center items-center rounded-full bg-custom-gradient2 h-[35px] w-[35px]">
                  <Image src={vecBtn} alt="" className="w-[20px] h-[20px]" />
                </span>
                <span>امتحان کردن</span>
              </button>
            </a>
          </section>
        </main>

        {/* Footer */}
        <footer className="p-4 mt-4 text-center text-gray-500 bg-gray-800">
          <p>&copy; 2024 هوش مصنوعی لئوناردو. تمامی حقوق محفوظ است.</p>
        </footer>
      </div>
    </div>
  );
};

export default DetailsPage;
