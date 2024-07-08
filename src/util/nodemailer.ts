import nodemailer from "nodemailer";

interface mailType {
  to: string;
  subject: string;
  text: string;
}

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_ACCOUNT_DEV,
    pass: process.env.GOOGLE_APPLICATION_PASSWORD,
  },
});

// export default async function sendMail(): Promise<boolean> {
//   try {
//     const mailOptions = {
//       from: process.env.GMAIL_ACCOUNT_DEV,
//       to: "adnanfurkan77@gmail.com",
//       subject: "Hello from Nodemailer",
//       text: "This is a test email sent using Nodemailer.",
//     };

//     const response = await transporter.sendMail(mailOptions);
//     return true;
//   } catch {
//     return false;
//   }
// }

async function mailOptionsFunc(params: mailType) {
  return {
    from: process.env.GMAIL_ACCOUNT_DEV,
    to: params.to,
    subject: params.subject,
    text: params.text,
  };
}

export async function CreateAdminUserEmail(input: mailType): Promise<boolean> {
  try {
    const mailOptions = await mailOptionsFunc(input);
    await transporter.sendMail(mailOptions);
    return true;
  } catch {
    return false;
  }
}
