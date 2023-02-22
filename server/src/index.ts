import { LOG, LOG_TYPE } from './constants';

import cors from 'cors';
import detailRouter from './feed/routes/detail.route';
import dotenv from 'dotenv';
import express from 'express';
import feedRouter from './feed/routes/feed.route';

dotenv.config();

const app = express();

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token'
  ],
  credentials: true,
  methods: 'GET',
  origin: 'http://localhost:5173/',
  preflightContinue: false
};
app.use(cors(options));
app.options('*', cors(options));
app.use(express.json());

let PORT: string | number;
process.env.PORT !== undefined ? (PORT = process.env.PORT) : (PORT = 3333);

app.use('/api/', feedRouter);
app.use('/api/', detailRouter);

app.listen(PORT, () => {
  console.log(`\n[${LOG_TYPE('SERVER')}] RUNNING ON PORT: ${LOG(PORT)}\n`);
});
