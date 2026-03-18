import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import MessageRoutes from './routes/message.route.js';
import path from 'path'


dotenv.config();

const app = express();
const _dirname = path.resolve()

const PORT = process.env.PORT;

app.use('/api/auth',authRoutes)
app.use('/api/messages',MessageRoutes);

if(process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(_dirname, '../frontend/dist')));
    app.get('/', (req, res)=>{
        res.sendFile(path.join(_dirname, '../frontend','dist','index.html'))
    })
}


app.listen(PORT, ()=>{
    console.log('Server has started at' +' '+ PORT)
});