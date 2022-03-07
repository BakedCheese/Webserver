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

export const getProject_IconWithId = (req, res) => {
  dbConnection.query(
    `SELECT * FROM p_i WHERE id = ${req.params.id}`,
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

export const createProject_Icon = (req, res) => {
  dbConnection.query("SELECT * FROM p_i", (err, results) => {
    if (!err) {
      res.json(results);
    } else {
      res.send(err);
    }
  });
};

export const deleteProject_Icon = (req, res) => {
  dbConnection.query(
    "DELETE FROM p_i WHERE id = ?",
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

export const updateProject_Icon = (req, res) => {
  dbConnection.query(
    "UPDATE p_i SET ? WHERE id = ?",
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
