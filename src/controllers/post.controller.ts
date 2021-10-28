import { Request, Response, NextFunction } from 'express';
import { ICreatePost } from '../interfaces/post.interface';
import PostService from '../services/post.service';

class PostController {
    async create(req: Request, res: Response, next: NextFunction) {
        const body = req.body;
        const params: ICreatePost = {
            ...body,
            createdAt: new Date()
        };
        try {
            const postData = await PostService.createPost(params);
            res.status(201).json(postData);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    async findAll(req: Request, res: Response, next: NextFunction) {
        const a = PostService.findAllPost();
        try {
            const b = await a;
            res.status(200).json(b);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    async findById(req: Request, res: Response, next: NextFunction) {
        const id = req.params.id;
        const a = PostService.findByIdPost(id);
        try {
            const b = await a;
            res.status(200).json(b);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    async update(req: Request, res: Response, next: NextFunction) {
        const id = req.params.id;
        const PostName = req.body.name;
        const PostNote = req.body.note;
        const PostImage = req.body.image;
        const PostCreateBy = req.body.createby;
        const PostCreateAt = new Date();
        const a = PostService.updatePost(id, PostName, PostNote, PostImage, PostCreateBy, PostCreateAt);
        try {
            const b = await a;
            res.status(200).json(b);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    async delete(req: Request, res: Response, next: NextFunction) {
        const id = req.params.id;
        const a = PostService.deletePost(id);
        try {
            const b = await a;
            res.json('delete success');
        } catch (error) {
            res.status(500).json(error);
        }
    };
}

export default new PostController;