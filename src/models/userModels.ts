import connection from "../database";

// note to self: update userid to UUID; (string);

interface createUserInput {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  profileImg: string,
  state: string,
  city: string,
  country: string,
  username: string
}

export async function createUserModel(input: createUserInput): Promise<void> {

  const { firstName, lastName, email, password, profileImg, state, city, country, username } = input;

  const conn = await connection.connect()
  await conn.query(`INSERT INTO users (
    first_name,
    last_name,
    email,
    password,
    profile_img,
    state,
    city,
    country,
    username) VAlUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
    [firstName, lastName, email, password, profileImg, state, city, country, username])
}