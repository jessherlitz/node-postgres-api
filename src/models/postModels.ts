import connection from "../database";


// note to self: update userid to UUID; (string);

interface createPostInput {
  parentPostId: string | null;
  postText: string,
  asset: string,
  userId: number,
}

export async function createPostModel(input: createPostInput): Promise<void> {

  let { parentPostId, postText, asset, userId } = input;

  if (!parentPostId) {
    parentPostId = null;
  }

  const conn = await connection.connect();
  await conn.query(`INSERT INTO posts (
    parent_post_id,
    post_text,
    asset,
    posts_user_id
    ) VAlUES ($1, $2, $3, $4)`,
    [parentPostId, postText, asset, userId])
}
