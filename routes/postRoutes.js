import Router from 'koa-router';
import { getPosts, createPost, deletePost,updatePost } from '../controllers/postController.js';
import { jwtMiddleware } from '../middlewares/authMiddleware.js';

const router = new Router({ prefix: '/posts' });

router.get('/', getPosts);
router.get('/', jwtMiddleware, getPosts);
router.post('/', jwtMiddleware, createPost);
router.delete('/:id', jwtMiddleware, deletePost);
router.put('/:id', jwtMiddleware, updatePost);


export default router;
