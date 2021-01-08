import {  Router} from "https://deno.land/x/oak/mod.ts";
import {getAllUser, createUser, deleteUser, getOneUser, updateUser} from './controller.ts'

const router = new Router()

router.get('/users' ,  getAllUser)
router.post('/users' ,  createUser)
router.get('/users/:id' ,  getOneUser)
router.put('/users/:id' , updateUser)
router.delete('/users/:id' ,deleteUser)


export default router