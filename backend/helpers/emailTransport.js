import "dotenv/config";

import nodemailer from "nodemailer";

let transporter;

if (process.env.NODE_ENV === "development") {
  transporter = nodemailer.createTransport({
    host: "mailhog",
    port: 1025,
  });
} else if (process.env.NODE_ENV === "production") {
  transporter = nodemailer.createTransport({
    /////
    ///TODO: CONFIGURE MAILGUN IN PRODUCTION
  });
}

export default transporter;
