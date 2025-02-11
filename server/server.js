import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import petRoute from './routes/petRoute.js';
import connectDB from './config/db.js';
import userRoute from './routes/userRoute.js';
dotenv.config();
const app = express();

// Middleware : Needs to be pushed away in a future release for readability and performance
app.use(cors());
app.use(express.json());
connectDB();


// Pet Route
app.use('/api/pets', petRoute);

//User Route
app.use('/api/users', userRoute)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
