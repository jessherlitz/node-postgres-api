import { type Request, type Response } from "express";
import { createPostModel, getPostsModel } from '../models/postModels'

export async function createPost(req: Request, res: Response) {
  try {
    const { parentPostId, postText, asset, userId } = req.body;
    if (!postText && !asset) {
      return res.send('No text or asset.')
    }

    await createPostModel!({ parentPostId, postText, asset, userId });
    return res.status(200).send();

  } catch (err) {
    console.log(err)
    return res.send(err);
  }
}

export async function getPosts(req: Request, res: Response) {
  try {
    const userId = req.params.id
    const { rows: data } = await getPostsModel!(userId);
    if (data) {
      return res.status(200).json(data)
    }
  } catch (err) {
    console.log(err)
    return res.send(err);
  }
}
