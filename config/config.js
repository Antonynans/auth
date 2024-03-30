const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    host: process.env.DEPLOYED_URL,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: false,
    },
  },
  production: {
    host: process.env.DEPLOYED_URL,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialect: "postgres",
    ssl: {
      rejectUnauthorized: false,
    },
    migrations: [],
    subscribers: [],
  },
};
