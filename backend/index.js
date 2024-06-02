import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'

import connectDB from './db/connect.js';


dotenv.config({ path: './.env' })

connectDB();
const app = express();

app.use(cors({
    origin: [],
    methods: ["GET", "PUT", "DELET", "POST"],
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// import all routes

import userRouter from './routes/userRoutes.js';
import contentRouter from './routes/contentRoutes.js'
app.use('/api/user', userRouter)
app.use('/api/content', contentRouter)



app.listen(process.env.PORT, () => {
    console.log(`Server is running at Port ${process.env.PORT}`);
})