import express from "express";
import {PORT, mongoDBURL} from './config.js'
import mongoose, { mongo } from "mongoose";
import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();

//Middleware for parsing request body (express.json() -> allow the express to use json body)
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());

//Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

// we use express to create a http routes
// .get is HTTP method to get resources form server

// response use to listen msg
app.get('/',(request, response)=>{
    console.log(request)
    return response.status(234).send("Hello world")
})

app.use('/books', booksRoute);

// Route 
mongoose.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to database');
    // express server
    // now to let app listen to a port (it is better to add code to sperate folder)
    // function to listen to port
    app.listen(PORT,()=>{
        console.log(`App is listening to port: ${PORT}`)
    })

})  
.catch((error)=>{
    console.log(error);
})