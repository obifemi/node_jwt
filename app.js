import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
const app = express();
const port = process.env.PORT


dotenv.config();
//connection to database
conn();

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    }
);

app.get('/', (req, res) => {
    res.render('index');
}
);

app.get('/about', (req, res) => {
    res.render('about');
}
);

//middleware for serving static files
app.use(express.static('public'));

//ejs template engine
app.set('view engine', 'ejs');

