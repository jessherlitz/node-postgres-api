import { type Request, type Response } from "express";
import { createLikeModel } from '../models/likeModels'

export async function createLike(req: Request, res: Response) {
  try {
    const { postId, userId } = req.body;
    await createLikeModel!({ postId, userId });
    return res.status(200).send();

  } catch (err) {
    console.log(err)
    return res.send(err);
  }
}
