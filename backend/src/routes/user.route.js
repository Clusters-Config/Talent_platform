//signin,register,home,account
import { Router } from 'express'
import  { SignUp ,SignIn,JobsPost, JobsGet, SignOut } from '../controllers/user.control.js'
import { postNetwork , getNetwork } from '../controllers/network.control.js'
import { getTalent, postTalent } from '../controllers/talent.control.js'
import { authMiddleware }  from '../middlewares/auth.js'
import connection from '../controllers/connection.control.js'
const router = Router();

router.post('/login',SignIn)
router.post('/signup',SignUp)
router.post('/logout',SignOut)
router.post('/connect',connection)
router.get('/getjob',authMiddleware,JobsGet)
router.post('/postjob',JobsPost);
router.post('/postnetwork',postNetwork)
router.get('/getnetwork',authMiddleware,getNetwork)
router.post('/posttalent',postTalent)
router.get('/gettalent',getTalent)
//router.update('/account/details/:username')

router.get('/')

export default router