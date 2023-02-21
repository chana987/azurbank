import express from "express";
import payload from "payload";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(cors({ origin: true }));

const start = async () => {
  await payload.init({
    secret: dotenv.config().parsed?.PAYLOAD_SECRET || '',
    mongoURL: dotenv.config().parsed?.MONGO_URI || '',
    express: app,
  });

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.listen(3000, async () => {
    console.log(
      "Express is now listening for incoming connections on port 3000."
    );
  });
};

start();