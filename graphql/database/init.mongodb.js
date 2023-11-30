const mongoose = require("mongoose");

const connectString = process.env.MONGO_URI

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    const dbName = process.env.PROD_DB_NAME;
    mongoose
      .connect(connectString, {
        maxPoolSize: 50,
        dbName,
      })
      .then((_) => {
        console.log("Connect database successfully!");
      })
      .catch((err) => console.log("Error connecting: ", err));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
