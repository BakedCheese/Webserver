import dbConnection from "../connection.js";

export const getPictures = (req, res) => {
  dbConnection.query(
    "SELECT * FROM picture ORDER BY order_in_paragraph ASC",
    (err, results) => {
      if (!err) {
        res.json(results);
      } else {
        res.send(err);
      }
    }
  );
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

export const createPicture = (req, res) => {
  console.log(req.body);
  dbConnection.query(
    "INSERT INTO picture SET ? ",
    [req.body],
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

export const updatePicture = (req, res) => {
  dbConnection.query(
    "UPDATE picture SET ? WHERE id = ?",
    [req.body, req.params.id],
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
