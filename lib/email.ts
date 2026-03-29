import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendRegistrationReceipt({
  email,
  studentName,
  programs,
  amount,
}: {
  email: string;
  studentName: string;
  programs: any;
  amount: number;
}) {
  const selectedPrograms = [];
  if (programs.freeTrial) selectedPrograms.push("Free Trial Classes");
  if (programs.teamTraining) selectedPrograms.push("Aerial Drone Weekly Team Training (5 Weeks)");
  if (programs.vexTraining) selectedPrograms.push("VEX V5 Robotics Training (10 Courses)");

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #fff;">
      <h2 style="color: #2563eb; text-align: center;">Registration Receipt</h2>
      <p>Hi there,</p>
      <p>Thank you for registering <strong>${studentName}</strong> with us! We have successfully received your information and payment confirmation.</p>
      
      <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb;">
        <h3 style="margin-top: 0; font-size: 16px; color: #111827;">Order Summary</h3>
        <table style="width: 100%; border-collapse: collapse;">
          ${selectedPrograms.map(p => `
            <tr>
              <td style="padding: 5px 0; color: #374151;">${p}</td>
              <td style="text-align: right; padding: 5px 0; color: #111827;">Included</td>
            </tr>
          `).join('')}
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

  try {
    const { data, error } = await resend.emails.send({
      from: 'Mi3L School <admin@mi3lschool.org>',
      to: [email],
      bcc: ['admin@mi3lschool.org'],
      subject: `Registration Confirmed: ${studentName}`,
      html: html,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Exception in sendRegistrationReceipt:", err);
    return { success: false, error: err };
  }
}
