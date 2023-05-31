import express from 'express';
const app = express();
const port = 3000;

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

