import { Schema,model, isValidObjectId} from "mongoose";
const PostSchema = new Schema({
    
    name:{type:String , require:true},
    note:{type:String },
    image:{type:String},
    createBy:{type:String},
    createAt:{type:Date},
    updateBy:{type:String},
    updatedAt:{type:Date}

});
class PostClass{
    name: String;
    note: String;
    image:String;
    createBy:String;
    createAt:Date;
    updateBy:String;
    updatedAt:Date;
    constructor(name:String ,note:String,image:String,createBy:String,createAt:Date,updateBy:String,updatedAt:Date ){
        this.name = name;
        this.note = note;
        this.image = image;
        this.createBy= createBy;
        this.createAt= createAt;
        this.updateBy= updateBy;
        this.updatedAt=updatedAt;
    }
    
}
const modelPost = PostSchema.loadClass(PostClass);
export default model("modelPost", modelPost);







    