import connection from "../database";

interface likeInput {
  postId: string;
  userId: string;
}

export async function createLikeModel(input: likeInput): Promise<void> {

  const { postId, userId } = input;

  const conn = await connection.connect();
  await conn.query(`INSERT INTO likes (
    post_id,
    likes_user_id
    ) VAlUES ($1, $2)`,
    [postId, userId])
}
