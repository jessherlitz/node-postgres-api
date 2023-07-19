import { Router } from 'express'
import { follow } from "../controllers/followControllers"

const router = Router();

// router.get('/posts', getposts);
router.post('/follow', follow);
// router.delete('/posts/post/:id', deletepost);

export default router;