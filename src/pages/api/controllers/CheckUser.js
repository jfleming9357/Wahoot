import { sql_query } from '../../config/mysql-config';

export default async function checkUser(req, res) {
  const { email } = req.body;

  const emailResult = await sql_query(
    `SELECT * FROM wahoot.userTBL WHERE email='${email}'`
  );

  if (!emailResult.length) {
    try {
      await sql_query(`INSERT INTO userTBL (email) VALUES ("${email}");`);

      res.status(201).json({ msg: 'User Added' });
    } catch (err) {
      res.status(500).json({ msg: 'Server Error ', err });
    }
  } else {
    res.status(200).json({ msg: 'User already exist' });
  }
}
