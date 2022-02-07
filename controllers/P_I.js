import dbConnection from "../connection.js";

export const getProject_Icon = (req, res) => {
  dbConnection.query("SELECT * FROM p_i", (err, results) => {
    if (!err) {
      res.json(results);
    } else {
      res.send(err);
    }
  });
};
