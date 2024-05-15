import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
    })
    .catch((err)=>{
        console.log(err);
    });
const app = express();
app.listen(3000, (res,req)=>{
    console.log("Server is running on port 3000!!!");
})
app.get("/test", (res,req)=>{
    res.json({
        message: "hello word ",
    });
})


app.use("/api/user",userRouter);