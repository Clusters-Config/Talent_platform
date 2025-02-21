//signin,register,home,account
import { Router } from 'express'
import  { SignUp ,SignIn,JobsPost, JobsGet, SignOut } from '../controllers/user.control.js'
import { postNetwork , getNetwork } from '../controllers/network.control.js'
import { getTalent, postTalent } from '../controllers/talent.control.js'
import { authMiddleware }  from '../middlewares/auth.js'
import { connect, disconnect } from '../controllers/connection.control.js'
import { createprofile ,getProfile } from '../controllers/profile.control.js'
const router = Router();

router.post('/signup', SignUp)
router.post('/login', SignIn)
router.post('/logout', SignOut)
router.get('/getjob', authMiddleware, JobsGet)
router.post('/postjob', JobsPost)
router.post('/postnetwork', postNetwork)
router.get('/getnetwork', authMiddleware, getNetwork)
router.post('/posttalent', postTalent)
router.get('/gettalent', getTalent)
router.patch('/connect/:id/:title', connect)
router.patch('/disconnect/:id/:title', disconnect)
import { updateProfile } from '../controllers/profile.control.js';

router.post('/createprofile', createprofile)
router.get('/getprofile/:name',getProfile)
router.patch('/updateprofile/:name', updateProfile);


export default router
