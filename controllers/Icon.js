import dbConnection from "../connection.js";

export const getIcons = (req, res) => {
  dbConnection.query("SELECT * FROM icon", (err, results) => {
    if (!err) {
      res.json(results);
    } else {
      res.send(err);
    }
  });
};

export const getIconsWithId = (req, res) => {
  dbConnection.query(
    `SELECT * FROM icon WHERE id = ${req.params.id}`,
    (err, results) => {
      if (!err) {
        res.json(results[0]);
      } else {
        res.send(err);
        scrollBy;
      }
    }
  );
};
