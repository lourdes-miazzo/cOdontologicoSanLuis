import nodemailer from 'nodemailer';
import dotenv from "dotenv"
dotenv.config()

export const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_KEY
    },
    tls: {
        rejectUnauthorized: false
    }
});
