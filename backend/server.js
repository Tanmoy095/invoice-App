import cookieParser from "cookie-parser";
import chalk from "chalk";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import { morganMiddleware, systemLogs } from "./utils/Logger.js";
import connectionToDB from "./config/connectDb.js";
import mongoSanitize from "express-mongo-sanitize";
await connectionToDB();
const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(mongoSanitize());
app.use(morganMiddleware);

app.get("api/v1/test", (req, res) => {
  res.json({ HI: "welcome to the invoice app" });
});

const PORT = process.env.PORT || 1997;

app.listen(PORT, () => {
  console.log(
    `${chalk.green.bold("✔")} 👍 Server running in ${chalk.yellow.bold(
      process.env.NODE_ENV
    )} mode on port ${chalk.blue.bold(PORT)}`
  );
  systemLogs.info(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
