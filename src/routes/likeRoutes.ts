import { Router } from 'express'
import { createLike } from "../controllers/likeControllers"

const router = Router();

// router.get('/posts', getposts);
router.post('/likes', createLike);
// router.get('/posts/post/:id', getpost);
// router.put('/posts/post/:id', updatepost);
// router.delete('/posts/post/:id', deletepost);

export default router;