const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("MONGO_URI is not defined in the environment variables.");
}

const options = { useNewUrlParser: true, useUnifiedTopology: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri, options).connect();
  }
  connectDB = global._mongoClientPromise;
} else {
  connectDB = new MongoClient(uri, options).connect();
}

module.exports = { connectDB };
