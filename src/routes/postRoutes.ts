import { Router } from 'express'
import { createPost } from "../controllers/postControllers"

const router = Router();

// router.get('/posts', getposts);
router.post('/posts', createPost);
// router.get('/posts/post/:id', getpost);
// router.put('/posts/post/:id', updatepost);
// router.delete('/posts/post/:id', deletepost);

export default router;