import { type Request, type Response } from "express";
import { Users } from '../models/userModels'

export async function createUser(req: Request, res: Response) {
  try {
    const { firstName, lastName, email, password, profileImg, state, city, country, username } = req.body;

    const data = await Users.createUser(firstName, lastName, email, password, profileImg, state, city, country, username)

    if (data) {
      console.log('data', data)
      res.send(data)
    }
  } catch (err) {
    console.log(err)
    return res.send(err)
  }
}

