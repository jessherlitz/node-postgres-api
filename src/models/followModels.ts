import connection from "../database";

interface followInput {
  followeeId: string;
  followerId: string;
}

export async function followModel(input: followInput): Promise<void> {

  const { followeeId, followerId } = input;

  const conn = await connection.connect();
  await conn.query(`INSERT INTO follows (
    followee_user_id,
    follower_user_id
    ) VAlUES ($1, $2)`,
    [followeeId, followerId])
}
