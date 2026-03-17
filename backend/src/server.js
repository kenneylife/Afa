import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import MessageRoutes from './routes/message.route.js'


dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use('/api/auth',authRoutes)
app.use('/api/messages',MessageRoutes)


app.listen(PORT, ()=>{
    console.log('Server has started at' +' '+ PORT)
});