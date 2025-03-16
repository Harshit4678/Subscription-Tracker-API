import nodemailer from "nodemailer";

import { EMAIL_PASSWORD } from "./env.js";

export const accountEmail = "Harshitkumar2045@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "harshitkumar2045@gmail.com",
    pass: EMAIL_PASSWORD,
  },
});

export default transporter;
