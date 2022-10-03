/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/items.router";
import sequelize from "./util/database";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const HOST = "0.0.0.0";

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/notes", itemsRouter);

/**
 * Server Activation
 */
const start = async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, HOST, () => {
      console.log(`App is listening on port ${PORT} , ${HOST}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();