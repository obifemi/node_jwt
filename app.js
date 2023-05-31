import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    }
);

app.get('/', (req, res) => {
    res.send('Hello World za!');
}
);

//middleware for serving static files
app.use(express.static('public'));