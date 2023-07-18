import { type Request, type Response } from "express";
import { createPostModel } from '../models/postModels'

export async function createPost(req: Request, res: Response) {
  try {
    const { parentPostId, postText, asset, userId } = req.body;
    await createPostModel!({ parentPostId, postText, asset, userId });
    return res.status(200).send();

  } catch (err) {
    console.log(err)
    return res.send(err);
  }
}
