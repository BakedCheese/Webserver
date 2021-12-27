import dbConnection from "../connection.js";

export const getCollections = (req, res) => {
  dbConnection.query(
    "SELECT * FROM collection ORDER BY made DESC",
    (err, results) => {
      if (!err) {
        res.json(results);
      } else {
        res.send(err);
      }
    }
  );
};

export const getCollectionWithId = (req, res) => {
  dbConnection.query(
    `SELECT * FROM collection WHERE id = ${req.params.id}`,
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

export const createCollection = (req, res) => {
  console.log(req.body);
  dbConnection.query(
    "INSERT INTO collection SET ? ",
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

export const deleteCollection = (req, res) => {
  dbConnection.query(
    "DELETE FROM collection WHERE id = ?",
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

export const updateCollection = (req, res) => {
  dbConnection.query(
    "UPDATE collection SET ? WHERE id = ?",
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
