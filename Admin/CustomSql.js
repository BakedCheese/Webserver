import dbConnection from "../connection.js";

export const CustomQuery = (req, res) => {
  console.log([req.body.query]);
  dbConnection.query("?", [req.body.query], (err, results) => {
    if (!err) {
      res.json(results);
    } else {
      res.send(err);
    }
  });
};
