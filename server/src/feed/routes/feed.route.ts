import { Feed } from '../mocks/feed';
import express from 'express';

const feedRouter = express.Router();

feedRouter.get('/feed', (_, res) => {
  return res.json(Feed);
});

export default feedRouter;
