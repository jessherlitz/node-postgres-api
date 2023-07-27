import { QueryResult } from "pg";
import connection from "../database";

interface Post {
  postId?: string,
  parentPostId: string | null;
  postText: string,
  asset: string,
  userId: string,
}

export async function createPostModel(input: Post): Promise<void> {

  const { parentPostId, postText, asset, userId } = input;

  const conn = await connection.connect();
  await conn.query(`INSERT INTO posts (
    parent_post_id,
    post_text,
    asset,
    post_user_id
    ) VAlUES ($1, $2, $3, $4)`,
    [parentPostId, postText, asset, userId])
}

export async function getPostsModel(userId: string): Promise<QueryResult<Post[]>> {

  const conn = await connection.connect();
  const queryResult = await conn.query(`SELECT * FROM POSTS 
      WHERE post_user_id IN 
      (SELECT followee_user_id FROM follows WHERE follower_user_id = $1)`, [userId])

  return queryResult;
}
