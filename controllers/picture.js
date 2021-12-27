import dbConnection from "../connection.js";

export const getPictures = (req, res) => {
  dbConnection.query("SELECT * FROM picture", (err, results) => {
    if (!err) {
      res.json(results);
    } else {
      res.send(err);
    }
  });
};

export const getPictureWithId = (req, res) => {
  dbConnection.query(
    `SELECT * FROM picture WHERE id = ${req.params.id}`,
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

export const deletePicture = (req, res) => {
  dbConnection.query(
    "DELETE FROM picture WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (!err) {
        res.json(results);
      } else {
        res.send(err);
        console.log(err);
      }
    }
  );
};
