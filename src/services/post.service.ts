
import modelPost from '../models/post.model';
import { ICreatePost } from '../interfaces/post.interface';
class PostService {
  async createPost(params: ICreatePost) {
    return await modelPost.create(params);
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