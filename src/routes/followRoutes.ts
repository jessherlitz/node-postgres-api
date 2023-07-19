import { Router } from 'express'
import { createFollow } from "../controllers/followControllers"

const router = Router();

// router.get('/posts', getposts);
router.post('/follows', createFollow);
// router.delete('/posts/post/:id', deletepost);

export default router;