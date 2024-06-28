import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user_route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Middleware to parse JSON bodies and handle CORS
app.use(cors());
app.use(express.json());

// Connecting to MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB", error);
    });

// Using the book and user routes
app.use("/books", bookRoute);
app.use("/users", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
