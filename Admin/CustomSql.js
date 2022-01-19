import dbConnection from "../connection.js";

export const CustomQuery = (req, res) => {
  dbConnection.query("?", [req.body], (err, results) => {
    if (!err) {
      res.json(results);
    } else {
      res.send(err);
    }
  });
};
