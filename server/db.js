// connect database
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "todoapp",
});

module.exports = pool;
