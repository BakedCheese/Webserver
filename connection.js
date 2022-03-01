import mysql from "mysql2";
import fs from "fs";



const con = mysql.createConnection({
  host: "portfolio-do-user-8793639-0.b.db.ondigitalocean.com",
  user: "doadmin",
  password: "7t1wsx3tNIPLPHIy",
  port: "25060",
  database: "defaultdb",
  ssl  : {
    ca : fs.readFileSync('ca-certificate.crt')
  }
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  
});




export default con;
