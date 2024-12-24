import { articles } from "@/data/data";


export default function handler(req, res) {
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      const article = articles.find((article) => article.id == +id);
      res.status(200).json(article);
      break;
    case "PATCH":
      const { title } = req.body;
      const index = articles.findIndex((article) => article.id == +id);
      article[index] = { id: +id, title };
      res.status(200).json(article[index], article);

      break;
    default:
      break;
  }
}
