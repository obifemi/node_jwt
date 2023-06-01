import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
import bodyParser from 'body-parser';

//importing routes
import pageRoute from './routes/pageRoute.js';
dotenv.config();
import photoRoute from "./routes/photoRoute.js"

const app = express();
const port = process.env.PORT 

//connection to database
conn();

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

//middleware for serving static files
app.use(express.static('public'));

// use jsonParser middleware to parse incoming JSON data
const jsonParser = bodyParser.json();
app.use(jsonParser);

//routes
app.use('/', pageRoute);
app.use('/photos', photoRoute);

//ejs template engine
app.set('view engine', 'ejs');