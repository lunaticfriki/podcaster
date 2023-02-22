import { Detail } from '../mocks/detail';
import { TypedRequestParams } from '../detail-types';
import express from 'express';

const detailRouter = express.Router();

detailRouter.get(
  '/detail/:id',
  (req: TypedRequestParams<{ id: string }>, res) => {
    const { id } = req.params;

    const detail = Detail.data.find((el) => el.id === id);

    if (!detail) {
      return res.status(404).json({ message: 'Nothing found' });
    } else return res.json(detail);
  }
);

export default detailRouter;
