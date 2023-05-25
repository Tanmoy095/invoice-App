import "dotenv/config";
import nodemailer from "nodemailer";
//import mg from "nodemailer-mailgun-transport";

let transporter;

if (process.env.NODE_ENV === "development") {
  transporter = nodemailer.createTransport({
    host: "mailhog",
    port: 1025,
  });
} else if (process.env.NODE_ENV === "production") {
  ///
}

export default transporter;
