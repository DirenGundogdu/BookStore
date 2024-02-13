import express, { request } from "express";
import { PORT, MONGODB_URL } from "./config.js";
import mongoose from "mongoose";
import bookRouter from "./routes/booksRoute.js";
import cors from "cors";

const app = express();


app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: ['Content-Type'],
}));

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Hello World MERNx');
});

app.use('/books', bookRouter );


mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error:', error);
    });