import express from "express";
import mongoose from 'mongoose';
import webhook from "./routes/routes.js";
import 'dotenv/config';

const app = express();
app.use(express.json());
const mongoURI = process.env.DB_URL;
console.log(process.env.DB_URL,"eng");
mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB connected successfully!')
        app.use("/",webhook)
        app.listen(3000, () => {
    console.log("Server running on port 3000");
});
    })
    .catch(err => console.error('MongoDB connection error:', err));
