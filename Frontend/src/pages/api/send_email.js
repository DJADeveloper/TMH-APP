import nodemailer from "nodemailer";
import Cors from "cors";

// Initializing the cors middleware with the options
const cors = Cors({
  methods: ["POST"],
});

// Helper method to wait for a middleware to execute before continuing
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(req, res) {
  // Run the cors middleware
  await runMiddleware(req, res, cors);

  if (req.method === "POST") {
    const { name, email, phone, subject, message } = req.body;

    // Set up transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to send email." });
    }
  } else {
    // Handle any other HTTP methods
    res.status(405).end();
  }
}
