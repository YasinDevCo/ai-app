import { articles } from "@/data/data";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.status(200).json(articles);
      break;
    case "POST":
      const { todo } = req.body;
      // store data in db
      const newTodo = {
        id: articles.length + 1,
        title: todo,
      };
      res.status(201).json({
        message: "succes",
        data: newTodo,
      });
      break;
    case "DELETE":
      // delete data in db
      res.status(200).json({
        message: "all articles delete",
        data: [],
      });
      break;
    case "PUT":
      // delete data in db
      res.status(200).json({
        message: "all articles replace",
        data: req.body,
      });
      break;
    default:
      break;
  }
}
