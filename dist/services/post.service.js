"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_model_1 = __importDefault(require("../models/post.model"));
class PostService {
    createPost(name, note, image, createBy, createAt) {
        return post_model_1.default.create({
            name: name,
            note: note,
            image: image,
            createBy: createBy,
            createAt: createAt
        });
    }
    findAllPost() {
        return post_model_1.default.find({});
    }
    findByIdPost(id) {
        return post_model_1.default.findById({
            _id: id
        });
    }
    updatePost(id, name, note, image, createBy, createAt) {
        return post_model_1.default.findByIdAndUpdate({ _id: id }, {
            name: name,
            note: note,
            image: image,
            createBy: createBy,
            createAt: createAt
        });
    }
    deletePost(id) {
        return post_model_1.default.deleteOne({
            _id: id
        });
    }
}
exports.default = new PostService;
