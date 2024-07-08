"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdminUserEmail = CreateAdminUserEmail;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_ACCOUNT_DEV,
        pass: process.env.GOOGLE_APPLICATION_PASSWORD,
    },
});
async function mailOptionsFunc(params) {
    return {
        from: process.env.GMAIL_ACCOUNT_DEV,
        to: params.to,
        subject: params.subject,
        text: params.text,
    };
}
async function CreateAdminUserEmail(input) {
    try {
        const mailOptions = await mailOptionsFunc(input);
        await transporter.sendMail(mailOptions);
        return true;
    }
    catch (_a) {
        return false;
    }
}
//# sourceMappingURL=nodemailer.js.map