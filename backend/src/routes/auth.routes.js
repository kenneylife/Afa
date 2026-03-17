import express from 'express';
const router = express.Router();
 
router.get('/signup',(req, res)=>{
    res.send('<h1>This is the signup page</h1>')
})

router.get('/login',(req, res)=>{
    res.send('<h1>This is the login page</h1>')
})

router.get('/logout',(req, res)=>{
    res.send('<h1>This is the logout page</h1>')
})


export default router;