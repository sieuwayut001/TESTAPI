import express from 'express';
const router = express.Router();
import PostController from '../controllers/post.controller';
/* GET home page. */

 //create mới dữ liệu vào db
router.post('/',PostController.create);
router.get('/',PostController.findAll);
router.get('/:id',PostController.findById);
router.put('/:id',PostController.update);
router.delete('/:id',PostController.delete);
export default router;