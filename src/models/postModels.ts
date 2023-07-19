import connection from "../database";

interface createPostInput {
  parentPostId: string | null;
  postText: string,
  asset: string,
  userId: string,
}

export async function createPostModel(input: createPostInput): Promise<void> {

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
