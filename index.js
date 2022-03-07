// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import router from "./router/router.js";

// init express
const app = express();

// use express json
app.use(express.json());

// use cors
app.use(cors());

// use router
app.use(router);

app.listen(5000, () => console.log("Server running at http://localhost:5000"));
