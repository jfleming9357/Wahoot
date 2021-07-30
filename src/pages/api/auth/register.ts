// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { username, userpassword } = req.body;
  //database authentication here
  res.status(200).json(req.body);
};
