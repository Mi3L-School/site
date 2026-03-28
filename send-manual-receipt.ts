import { Resend } from 'resend';

// Load env vars if not already loaded (Bun does this automatically, but just in case)
const resend = new Resend(process.env.RESEND_API_KEY);

async function send() {
  const email = 'helen_Lfy@hotmail.com';
  const amount = 270;
  const program = "March Break Aerial Drone";

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #fff;">
      <h2 style="color: #2563eb; text-align: center;">Registration Receipt</h2>
      <p>Hi there,</p>
      <p>Thank you for registering with us! We have successfully received your information and payment confirmation.</p>
      
      <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb;">
        <h3 style="margin-top: 0; font-size: 16px; color: #111827;">Order Summary</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 5px 0; color: #374151;">${program}</td>
            <td style="text-align: right; padding: 5px 0; color: #111827;">Included</td>
          </tr>
          <tr style="border-top: 1px solid #e5e7eb;">
            <td style="padding: 10px 0; font-weight: bold; color: #111827;">Total Paid</td>
            <td style="text-align: right; padding: 10px 0; font-weight: bold; color: #2563eb;">$${amount.toFixed(2)} CAD</td>
          </tr>
        </table>
      </div>

      <p style="font-size: 14px; color: #4b5563;">
        If you have any questions, feel free to reply to this email or contact us at <a href="mailto:admin@mi3lschool.org" style="color: #2563eb;">admin@mi3lschool.org</a>.
      </p>
      
      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="text-align: center; font-size: 12px; color: #9ca3af;">
        &copy; ${new Date().getFullYear()} Mi3L School. All rights reserved.
      </p>
    </div>
  `;

  console.log(`Sending email to ${email} for ${program} ($${amount})...`);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Mi3L School <admin@mi3lschool.org>',
      to: [email],
      bcc: ['admin@mi3lschool.org'],
      subject: `Registration Confirmed: ${program}`,
      html: html,
    });

    if (error) {
      console.error("Resend Error:", error);
      process.exit(1);
    }

    console.log("Email sent successfully!", data);
    process.exit(0);
  } catch (err: any) {
    console.error("Exception in script:", err);
    process.exit(1);
  }
}

send();
