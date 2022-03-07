import dbConnection from "../connection.js";

export const getParagraphs = (req, res) => {
  dbConnection.query(
    "SELECT * FROM paragraph ORDER BY order_in_project ASC",
    (err, results) => {
      if (!err) {
        res.json(results);
      } else {
        res.send(err);
      }
    }
  );
  dbConnection.end();
};

export const getParagraphWithId = (req, res) => {
  dbConnection.query(
    `SELECT * FROM paragraph WHERE id = ${req.params.id}`,
    (err, results) => {
      if (!err) {
        res.json(results[0]);
      } else {
        res.send(err);
        scrollBy;
      }
    }
  );
  dbConnection.end();
};

export const createParagraph = (req, res) => {
  console.log(req.body);
  dbConnection.query(
    "INSERT INTO paragraph SET ? ",
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
  dbConnection.end();
};

export const deleteParagraph = (req, res) => {
  dbConnection.query(
    "DELETE FROM paragraph WHERE id = ?",
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
  dbConnection.end();
};

export const updateParagraph = (req, res) => {
  dbConnection.query(
    "UPDATE paragraph SET ? WHERE id = ?",
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
  dbConnection.end();
};
