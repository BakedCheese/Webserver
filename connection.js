import mysql from "mysql2";
import fs from "fs";
import cron from "node-cron";


let con = mysql.createConnection({
  host: "portfolio-do-user-8793639-0.b.db.ondigitalocean.com",
  user: "doadmin",
  password: "7t1wsx3tNIPLPHIy",
  port: "25060",
  database: "defaultdb",
  ssl  : {
    ca : fs.readFileSync('ca-certificate.crt')
  }
});

Checkconnection();



cron.schedule('* 0,5,10,15,20 * * *', () => {
  console.log();
  console.log('Reconnecting module actived -->');
  con.end();
  console.log('Connection ended -->');
  console.log('Connecting...');
  con = mysql.createConnection({
    host: "portfolio-do-user-8793639-0.b.db.ondigitalocean.com",
    user: "doadmin",
    password: "7t1wsx3tNIPLPHIy",
    port: "25060",
    database: "defaultdb",
    ssl  : {
      ca : fs.readFileSync('ca-certificate.crt')
    }
  });
  Checkconnection();
});

function Checkconnection(){

  const now = new Date();

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected! on: "  + now);
  });
}

export default con;
