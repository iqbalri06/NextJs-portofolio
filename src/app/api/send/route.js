import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, subject, message } = req.body;

      // Use environment variables for sensitive information
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // Log values for debugging
      console.log("Received Email:", email);
      console.log("Subject:", subject);
      console.log("Message:", message);

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "ballqun6@gmail.com", // Update with your recipient's email address
        subject: subject,
        text: `Email: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Email sending failed:", error);
          return res.status(500).json({ error: "Internal Server Error", details: error.message });
        } else {
          console.log("Email sent:", info.response);
          return res.status(200).json({ success: true, details: info.response });
        }
      });
    } catch (error) {
      console.error("Server error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Method other than POST is not allowed
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
