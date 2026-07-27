import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      firstName,
      lastName,
      email,
      phone,
      industry,
      company,
      jobTitle,
      country,
      message
    } = body;

    const customerName = name || `${firstName || ''} ${lastName || ''}`.trim() || 'Valued Customer';
    const customerEmail = email?.trim();

    if (!customerEmail) {
      return NextResponse.json(
        { success: false, error: 'Email address is required' },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || 'smtp.office365.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser = process.env.SMTP_USER || 'Nilesh.patel@dhgsoft.com';
    const smtpPass = process.env.SMTP_PASS;
    const adminEmail = process.env.ADMIN_EMAIL || 'Nilesh.patel@dhgsoft.com';

    if (!smtpPass || smtpPass === 'your-microsoft-password' || smtpPass === 'Aapka_Real_Password_Yahan_Daalein') {
      return NextResponse.json(
        { success: false, error: 'Please update your Microsoft 365 password in .env.local file' },
        { status: 500 }
      );
    }

    // Pure Node.js Backend SMTP Transporter configured for Microsoft Office 365 / Outlook
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false, // Port 587 uses STARTTLS
      requireTLS: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
      }
    });

    // 1. Notification Email to Nilesh.patel@dhgsoft.com (Admin)
    const adminMailOptions = {
      from: `"DHGsoft Web Portal" <${smtpUser}>`,
      to: adminEmail,
      replyTo: customerEmail,
      subject: `[New Inquiry] Request from ${customerName} - ${company || 'Enterprise Client'}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #0A0E1A; color: #FFFFFF; padding: 30px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #8C123B;">
          <div style="border-bottom: 2px solid #C2185B; padding-bottom: 15px; margin-bottom: 20px;">
            <h2 style="color: #FFFFFF; margin: 0; font-size: 22px;">New Contact Inquiry Received</h2>
            <p style="color: #C2185B; font-size: 13px; font-weight: bold; margin-top: 5px; text-transform: uppercase;">DHGsoft Web Request</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; font-weight: bold; width: 35%;">Customer Name:</td>
              <td style="padding: 8px 0; color: #FFFFFF; font-weight: bold;">${customerName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0; color: #38BDF8; font-weight: bold;"><a href="mailto:${customerEmail}" style="color: #38BDF8; text-decoration: none;">${customerEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0; color: #FFFFFF;">${phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0; color: #FFFFFF;">${company || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; font-weight: bold;">Job Title:</td>
              <td style="padding: 8px 0; color: #FFFFFF;">${jobTitle || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; font-weight: bold;">Industry:</td>
              <td style="padding: 8px 0; color: #FFFFFF;">${industry || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; font-weight: bold;">Country:</td>
              <td style="padding: 8px 0; color: #FFFFFF;">${country || 'N/A'}</td>
            </tr>
          </table>

          <div style="background-color: #111827; padding: 15px; border-radius: 8px; border-left: 4px solid #C2185B;">
            <p style="color: #C2185B; font-weight: bold; margin-top: 0; font-size: 13px; text-transform: uppercase;">Message / Requirements:</p>
            <p style="color: #E2E8F0; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message || 'No additional message provided.'}</p>
          </div>

          <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #1E293B; text-align: center; color: #64748B; font-size: 12px;">
            Sent automatically from DHGsoft Website Contact Form.
          </div>
        </div>
      `,
    };

    // 2. Automated Thank You Email to Customer
    const customerMailOptions = {
      from: `"DHGsoft Solutions" <${smtpUser}>`,
      to: customerEmail,
      subject: `Thank you for contacting DHGsoft - We received your inquiry`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #F8FAFC; color: #0F172A; padding: 35px 20px; font-size: 15px; line-height: 1.6;">
          <div style="max-width: 580px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; padding: 35px; border: 1px solid #E2E8F0; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
            <div style="height: 4px; background: linear-gradient(to right, #8C123B, #C2185B); border-radius: 4px; margin-bottom: 25px;"></div>

            <h2 style="color: #0F172A; font-size: 22px; font-weight: 800; margin-top: 0; margin-bottom: 10px;">Thank You for Reaching Out!</h2>
            
            <p style="color: #475569; font-size: 15px;">Dear <strong>${customerName}</strong>,</p>

            <p style="color: #334155; font-size: 14.5px;">
              Thank you for contacting <strong>DHGsoft</strong>. We have successfully received your inquiry regarding our industrial digital transformation and engineering services.
            </p>

            <div style="background-color: #F1F5F9; border-left: 4px solid #8C123B; padding: 15px 20px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0; font-size: 13.5px; color: #334155; font-weight: 600;">
                Our systems engineering team is reviewing your requirements and will get back to you within 24 hours.
              </p>
            </div>

            <p style="color: #475569; font-size: 14px;">
              If you have any urgent queries in the meantime, feel free to reply directly to this email or call our regional office.
            </p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
              <p style="margin: 0; font-size: 14px; font-weight: bold; color: #0F172A;">Best Regards,</p>
              <p style="margin: 3px 0 0 0; font-size: 14px; font-weight: 800; color: #8C123B;">DHGsoft Engineering Team</p>
              <p style="margin: 3px 0 0 0; font-size: 12px; color: #64748B;">Industrial Digital Transformation &amp; Automation Platform</p>
              <p style="margin: 3px 0 0 0; font-size: 12px; color: #64748B;"><a href="mailto:solutions@dhgsoft.com" style="color: #8C123B; text-decoration: none;">solutions@dhgsoft.com</a> | +91 94294 19427</p>
            </div>

          </div>
        </div>
      `,
    };

    // Send both emails via pure Node.js Nodemailer SMTP
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    console.log(`[Contact API] Successfully delivered emails via SMTP to Admin (${adminEmail}) and Customer (${customerEmail})`);

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been submitted successfully! Confirmation email has been sent.'
    });

  } catch (error: any) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to process inquiry request via SMTP server' },
      { status: 500 }
    );
  }
}
