import mysql from 'serverless-mysql';

export const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
  },
});

export const sql_query = async (query_string) => {
  try {
    const result = await db.query(query_string);
    await db.end();
    return result;
  } catch (err) {
    throw Error(err.message);
  }
};
