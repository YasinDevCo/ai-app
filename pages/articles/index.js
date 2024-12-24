import ArticlesPage from "@/components/templates/ArticlesPage";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";

function index() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/articles");
      const data = await res.json();
      setArticles(data);
    }
    fetchData();
  }, []);
  if (!articles)
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

  return (
    <>
      <ArticlesPage articles={articles} />
    </>
  );
}

export default index;
