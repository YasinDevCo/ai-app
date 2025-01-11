import Article from "@/models/Articles";

export default async function handler(req, res) {

 
  if (req.method === "GET") {
   
    const id = req.query.id;
    try {
      const article = await Article.findOne({ _id: id });
      res.status(200).json({ status: "success", data: article });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({
        status: "failed",
        message: "Error in retrieving data from database",
      });
    }
  }
}
