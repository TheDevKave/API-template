/*  This import is used to resolve path aliases, since ts configuration is not enough for the built JS */
import './customImports';

import express from 'express';
import userRouter from './routes/user';
import { config } from './app.config';

/*  Express server  */
const app = express();

/*  Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*  Proxy rules */
app.set('trust proxy', true);

/*  Routes  */
app.use("/user", userRouter);


app.get('/', (req, res) => res.send('Welcome to the backend world 11111 !'));
app.get('/ping', (req, res) => res.send('pong'));

app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
