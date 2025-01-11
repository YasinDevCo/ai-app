import Article from "@/models/Articles";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {

  //--------------------------GET
  if (req.method === "GET") {
    // اتصال به پایگاه داده
    try {
      await connectDB(); // اتصال به پایگاه داده
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        status: "failed",
        message: "!------- Error in connecting to DB -------!",
        error: err,
      });
    }
    try {
      const articles = await Article.find();
      res.status(200).json({
        status: "success",
        message: "!------- Data fetched successfully -------!",
        data: articles,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "!------- Error in fetching data -------!",
        error: err,
      });
    }
    //--------------------------POST
  } else if (req.method === "POST") {
    const data = req.body.data;

    if (
      !data.title ||
      !data.content ||
      !data.category_item ||
      !data.logo ||
      !data.train ||
      !data.status
    ) {
      return res.status(400).json({
        status: "failed",
        message: "!------- Invalid Data -------!",
      });
    }
    // اتصال به پایگاه داده
    try {
      await connectDB(); // اتصال به پایگاه داده
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        status: "failed",
        message: "!------- Error in connecting to DB -------!",
        error: err,
      });
    }
    try {
      const article = await Article.create(data);
      res.status(201).json({
        status: "success",
        message: "!------- Data created in DB -------!",
        data: article,
      });
    } catch (err) {
      console.log("Error during saving article:", err);
      res.status(500).json({
        status: "failed",
        message: "!------- Error in Storing in DB -------!",
        error: err,
      });
    }
  } else {
    res.status(405).json({
      status: "failed",
      message: "!------- Method Not Allowed -------!",
    });
  }
}
