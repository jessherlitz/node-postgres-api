import { Router } from 'express'
import { createUser } from "../controllers/userControllers"

const router = Router();

// router.get('/users', getUsers)
router.post('/users', createUser)
// router.get('/users/user/:id', getUser)
// router.put('/users/user/:id', updateUser)
// router.delete('/users/user/:id', deleteUser)

export default router