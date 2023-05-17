import express from 'express';
import * as home from './routes/home.js';

const app = express();
app.use(express.json());

app.use('/home', home.testHome);

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
