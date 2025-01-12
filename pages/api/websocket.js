import { MongoClient } from "mongodb";
import WebSocket from "ws";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
await client.connect();
const db = client.db("forum");
const collection = db.collection("facilities");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("A Client connected");
});

const changeStream = collection.watch();

changeStream.on("change", (change) => {
  ws.send(JSON.stringify(change));
});

ws.on("close", () => {
  changeStream.close();
});
