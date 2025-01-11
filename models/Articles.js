import { Schema, model, models } from "mongoose";

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 1,
  },
  content: {
    type: String,
    required: true,
    minLength: 1,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  category_item: {
    type: String,
    required: false,
  },
  logo: {
    type: String,
    required: false,
  },
  main_image_1: {
    type: String,
    required: false,
  },
  train: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    require: false,
  },
});

const Article = models.Article || model("Article", articleSchema);

export default Article;
