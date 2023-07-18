import { type Request, type Response } from "express";
import { createUserModel } from '../models/userModels'

export async function createUser(req: Request, res: Response) {
  try {
    const { firstName, lastName, email, password, profileImg, state, city, country, username } = req.body;
    await createUserModel!({ firstName, lastName, email, password, profileImg, state, city, country, username });
    return res.status(200).send();

  } catch (err) {
    return res.send(err);
  }
}

