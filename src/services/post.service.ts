
import modelPost from '../models/post.model';
class PostService {
    createPost(name: string, note: string, image: string, createBy: string, createAt: Date) {
        return modelPost.create({
            name: name,
            note: note,
            image: image,
            createBy: createBy,
            createAt: createAt
        })
    }

    findAllPost() {
        return modelPost.find({})
    }

    findByIdPost(id: string) {
        return modelPost.findById({
            _id: id

        })
    }

    updatePost(id: string, name: string, note: string, image: string, createBy: string, createAt: Date) {
        return modelPost.findByIdAndUpdate({ _id: id }, {
            name: name,
            note: note,
            image: image,
            createBy: createBy,
            createAt: createAt
        })
    }

    deletePost(id: string) {
        return modelPost.deleteOne({
            _id: id
        })
    }

}
export default new PostService;