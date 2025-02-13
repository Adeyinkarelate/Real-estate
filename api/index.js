import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { error } from 'console';
dotenv.config();
const app = express();

//connecting to the database
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });



// server listining
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})