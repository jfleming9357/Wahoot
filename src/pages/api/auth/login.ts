// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mysql = require("serverless-mysql")({
  config: {
    host: "localhost",
    database: "wahoot",
    user: "user",
    password: "password",
  },
});

export default async (req, res) => {
  try {
    let result = await mysql.query("SELECT COUNT(*) FROM Persons");

    await mysql.end();

    res.status(200).json({ msg: `ITS ${result}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "ERROR" });
  }
};
