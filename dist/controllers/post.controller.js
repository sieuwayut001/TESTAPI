"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_service_1 = __importDefault(require("../services/post.service"));
class PostController {
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const PostName = req.body.name;
            const PostNote = req.body.note;
            const PostImage = req.body.image;
            const PostCreateBy = req.body.createby;
            const PostCreateAt = new Date();
            const a = post_service_1.default.createPost(PostName, PostNote, PostImage, PostCreateBy, PostCreateAt);
            try {
                const b = yield a;
                res.status(201).json(b);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    ;
    findAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const a = post_service_1.default.findAllPost();
            try {
                const b = yield a;
                res.status(200).json(b);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    ;
    findById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const a = post_service_1.default.findByIdPost(id);
            try {
                const b = yield a;
                res.status(200).json(b);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    ;
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const PostName = req.body.name;
            const PostNote = req.body.note;
            const PostImage = req.body.image;
            const PostCreateBy = req.body.createby;
            const PostCreateAt = new Date();
            const a = post_service_1.default.updatePost(id, PostName, PostNote, PostImage, PostCreateBy, PostCreateAt);
            try {
                const b = yield a;
                res.status(200).json(b);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    ;
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const a = post_service_1.default.deletePost(id);
            try {
                const b = yield a;
                res.json('delete success');
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    ;
}
exports.default = new PostController;
// import moment from 'moment';
// var momentDate = moment(PostCreateAt).format('DD/MM/YYYY');
