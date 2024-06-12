import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/home.route';

const app = express();

const port = process.env.PORT ?? 3000;

app.use(cors());

app.listen(port, () => {
	console.log('server online on port: ' + port);
});

app.use('/', router);
