export const checklogin = (req, res) => {
  if (req.body.username == "admin") {
    if (req.body.password == "LowWeb3500!") {
      res.json(true);
    } else {
      res.json(false);
    }
  } else {
    res.json(false);
  }
};
