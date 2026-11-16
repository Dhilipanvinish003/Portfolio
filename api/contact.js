// Serverless handler for /api/contact using Nodemailer (Root level)
import nodemailer from "nodemailer";

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req, res) {
  // CORS & Preflight handling
  if (req.method === "OPTIONS") {
    if (res && typeof res.status === "function") {
      return res.status(200).end();
    }
    return new Response(null, { status: 200 });
  }

  const sendResponse = (statusCode, data) => {
    if (res && typeof res.status === "function") {
      return res.status(statusCode).json(data);
    }
    return new Response(JSON.stringify(data), {
      status: statusCode,
      headers: { "Content-Type": "application/json" },
    });
  };

  if (req.method !== "POST") {
    return sendResponse(405, { error: "Method not allowed. Use POST." });
  }

  // Parse body for both Node (req.body) and standard Request (req.json())
  let body = req.body;
  if (!body && typeof req.json === "function") {
    try {
      body = await req.json();
    } catch {
      body = {};
    }
  } else if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }
  body = body || {};

  const { firstName = "", lastName = "", email = "", message = "" } = body;

  if (!email.trim() || !email.includes("@")) {
    return sendResponse(400, { error: "Please provide a valid email address." });
  }

  if (!message.trim()) {
    return sendResponse(400, { error: "Please enter a message." });
  }

  const gmailUser = process.env.GMAIL_USER || "dhilipandev@gmail.com";
  const gmailPass = (
    process.env.GMAIL_APP_PASSWORD || "qxgzxzcvdbcrfoaz"
  ).replace(/\s+/g, "");
  const toEmail = process.env.CONTACT_TO_EMAIL || "dhilipandev@gmail.com";

  if (!gmailUser || !gmailPass) {
    return sendResponse(500, { error: "Gmail SMTP credentials not configured." });
  }

  const fullName = `${firstName.trim()} ${lastName.trim()}`.trim() || "Portfolio Visitor";
  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim());
  const receivedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #0f172a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 580px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #0f172a; padding: 28px 32px;">
              <span style="display: inline-block; padding: 4px 10px; background-color: rgba(255, 255, 255, 0.12); color: #38bdf8; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.8px; border-radius: 20px;">
                Portfolio Inquiry
              </span>
              <h1 style="margin: 10px 0 0 0; color: #ffffff; font-size: 20px; font-weight: 700; line-height: 1.3;">
                New Message Received
              </h1>
              <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 13px;">
                Received on ${receivedAt} via your portfolio contact form.
              </p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 28px 32px;">
              
              <!-- Sender Information Card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 3px;">
                      From
                    </div>
                    <div style="font-size: 16px; font-weight: 600; color: #0f172a; margin-bottom: 12px;">
                      ${safeName}
                    </div>
                    
                    <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 3px;">
                      Email Address
                    </div>
                    <div style="font-size: 15px;">
                      <a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none; font-weight: 500;">
                        ${safeEmail}
                      </a>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Message Body -->
              <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 8px;">
                Message
              </div>
              <div style="background-color: #ffffff; border-left: 3px solid #2563eb; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; border-radius: 6px; padding: 18px 20px; margin-bottom: 24px;">
                <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap; word-break: break-word;">${safeMessage}</p>
              </div>

              <!-- Action Button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <a href="mailto:${safeEmail}?subject=Re:%20Portfolio%20Inquiry" style="display: inline-block; background-color: #0f172a; color: #ffffff; padding: 11px 22px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600;">
                      Reply to ${safeName} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 32px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.5;">
                Sent via Dhilipan's Portfolio &bull; Hit "Reply" in your email client to respond directly to ${safeEmail}.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const textContent = `NEW PORTFOLIO INQUIRY\n\nSender: ${fullName}\nEmail: ${email}\nDate: ${receivedAt}\n\nMessage:\n${message}\n\n---\nReply directly to this email to respond to ${email}.`;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const info = await transporter.sendMail({
      from: `"Portfolio Contact Form" <${gmailUser}>`,
      to: toEmail,
      replyTo: email.trim(),
      subject: `Portfolio Inquiry: ${fullName}`,
      html: htmlContent,
      text: textContent,
    });

    return sendResponse(200, { success: true, messageId: info.messageId });
  } catch (err) {
    let errorMessage = err?.message || "Server error while sending email via Gmail SMTP.";
    if (err?.code === "EAUTH" || err?.responseCode === 535) {
      errorMessage =
        "Gmail Authentication Failed (535 BadCredentials). Check that GMAIL_USER matches the Google account where the App Password was generated and that 2-Step Verification is active.";
    }
    return sendResponse(500, {
      error: errorMessage,
    });
  }
}
