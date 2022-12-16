// import express and initialize it as "app"
const express = require("express");
const app = express();
// cors
const cors = require("cors");
// pool - database connection
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// listen for connections on port 5000
app.listen(5000, () => {
  console.log("SERVER RUNNING ON PORT: 5000");
});
