import { type Request, type Response } from "express";
import { followModel } from '../models/followModels'

export async function createFollow(req: Request, res: Response) {
  try {
    const { followerId, followeeId } = req.body;
    await followModel!({ followeeId, followerId });
    return res.status(200).send();

  } catch (err) {
    console.log(err)
    return res.send(err);
  }
}
