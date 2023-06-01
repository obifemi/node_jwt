import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
//importing routes
import pageRoute from './routes/pageRoute.js';
dotenv.config();

const app = express();
const port = process.env.PORT 


//connection to database
conn();

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    }
);

// app.get('/', (req, res) => {
//     res.render('index');
// }
// );

// app.get('/about', (req, res) => {
//     res.render('about');
// }
// );

//routes
app.use('/', pageRoute);



//middleware for serving static files
app.use(express.static('public'));

//ejs template engine
app.set('view engine', 'ejs');

