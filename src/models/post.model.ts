import { Schema, model } from "mongoose";
const PostSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  note: {
    type: String
  },
  image: {
    type: String
  },
  createBy: {
    type: String
  },
  createAt: {
    type: Date
  },
  updateBy: {
    type: String
  },
  updatedAt: {
    type: Date
  }
});
class PostClass {
  name: String;
  note: String;
  image: String;
  createdBy: String;
  createdAt: Date;
  updatedBy: String;
  updatedAt: Date;
  constructor(name: String, note: String, image: String, createdBy: String, createdAt: Date, updatedBy: String, updatedAt: Date) {
    this.name = name;
    this.note = note;
    this.image = image;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
    this.updatedBy = updatedBy;
    this.updatedAt = updatedAt;
  }
}
const modelPost = PostSchema.loadClass(PostClass);
export default model("modelPost", modelPost);







