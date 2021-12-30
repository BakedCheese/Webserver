import mysql from "mysql2";

const con = mysql.createConnection({
  host: "portfolio-do-user-8793639-0.b.db.ondigitalocean.com",
  user: "doadmin",
  password: "7t1wsx3tNIPLPHIy",
  port: "25060",
  database: "defaultdb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

export default con;
