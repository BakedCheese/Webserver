import dbConnection from "../connection.js";

export const getProjects = (req, res) => {
  dbConnection.query(
    "SELECT * FROM project ORDER BY made DESC",
    (err, results) => {
      if (!err) {
        res.json(results);
      } else {
        res.send(err);
      }
    }
  );
};

export const getProjectWithId = (req, res) => {
  dbConnection.query(
    `SELECT * FROM project WHERE id = ${req.params.id}`,
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

export const createProject = (req, res) => {
  console.log(req.body);
  dbConnection.query(
    "INSERT INTO project SET ? ",
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

export const deleteProject = (req, res) => {
  dbConnection.query(
    "DELETE FROM project WHERE id = ?",
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

export const updateProject = (req, res) => {
  dbConnection.query(
    "UPDATE project SET ? WHERE id = ?",
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
