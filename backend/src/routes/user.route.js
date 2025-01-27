//signin,register,home,account
import { Router } from 'express'
import  { SignUp ,SignIn,JobsPost, JobsGet } from '../controllers/user.control.js'
import { postNetwork , getNetwork } from '../controllers/network.control.js'
import { authMiddleware }  from '../middlewares/auth.js'
const router = Router();

router.post('/login',SignIn)
router.post('/signup',SignUp)
router.get('/network')
router.get('/getjob',JobsGet)
router.post('/postjob',JobsPost);
router.post('/postnetwork',postNetwork)
router.get('/getnetwork',getNetwork)
//router.update('/account/details/:username')

router.get('/')

export default router