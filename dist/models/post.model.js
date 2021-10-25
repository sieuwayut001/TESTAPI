"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    name: { type: String, require: true },
    note: { type: String },
    image: { type: String },
    createBy: { type: String },
    createAt: { type: Date },
    updateBy: { type: String },
    updatedAt: { type: Date }
});
class PostClass {
    constructor(name, note, image, createBy, createAt, updateBy, updatedAt) {
        this.name = name;
        this.note = note;
        this.image = image;
        this.createBy = createBy;
        this.createAt = createAt;
        this.updateBy = updateBy;
        this.updatedAt = updatedAt;
    }
}
const modelPost = PostSchema.loadClass(PostClass);
exports.default = (0, mongoose_1.model)("modelPost", modelPost);
