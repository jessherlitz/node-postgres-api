import { type Request, type Response } from "express";
import { createPostModel, getPostsModel } from '../models/postModels'

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

export async function getPosts(req: Request, res: Response) {
  try {
    const { rows: queryResult } = await getPostsModel!();
    if (queryResult) {
      return res.status(200).json(queryResult)
    }
  } catch (err) {
    console.log(err)
    return res.send(err);
  }
}