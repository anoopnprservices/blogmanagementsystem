const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;
const path = require('path');
const session = require('express-session')
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const connectDB = require('./db/db');
connectDB()
.then(()=>{
    console.log("Connect to database successfully");
})
.catch((error)=>{
    console.log("Error connecting to database", error);
})

app.use(session({
    secret: process.env.JWT_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
app.listen(port,()=>{
    console.log(`App listening on ${port}`);
    
})