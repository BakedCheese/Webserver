import mysql from "mysql2";
import fs from "fs";
import cron from "node-cron";

const con = mysql.createConnection({
  host: "portfolio-do-user-8793639-0.b.db.ondigitalocean.com",
  user: "doadmin",
  password: "7t1wsx3tNIPLPHIy",
  port: "25060",
  database: "defaultdb",
  ssl: {
    ca: fs.readFileSync("ca-certificate.crt"),
  },
});

const now = new Date();
con.connect(function (err) {
  if (err) {
    console.log("ERROR:");
    throw err;
  }
  console.log("Connected! on: " + now);
});

export default con;
