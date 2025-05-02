import nodemailer from "nodemailer";
import config from "../config";
type IData = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};
export const sendMail = async (data: IData) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
            user: config.nodemailer_user_email,
            pass: config.nodemailer_user_pass,
        },
    });

    await transporter.sendMail({
        from: "medimart@gmail.com",
        to: "jmjubaer3927@gmail.com",
        subject: `Got mail form portfolio for contact me`,
        text: `Get message from ${data?.name}`,
        html: `
       <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
            <tr>
                <td>
                <table width="600" align="center" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <tr>
                    <td style="text-align: center; padding-bottom: 20px;">
                        <h2 style="color: #333;">📬 New Contact Form Submission</h2>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <p><strong>Name:</strong> ${data?.name}</p>
                        <p><strong>Phone:</strong>  ${data?.phone}</p>
                        <p><strong>Email:</strong>  ${data?.email}</p>
                        <p><strong>Subject:</strong>  ${data?.subject}</p>
                        <p><strong>Message:</strong></p>
                        <div style="background-color: #f1f1f1; padding: 15px; border-radius: 6px; margin-top: 5px;">
                         ${data?.message}
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <td style="padding-top: 30px; text-align: center; font-size: 12px; color: #888;">
                        <p>This message was sent from your portfolio contact form.</p>
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
        </table>

      `, // html body
    });
};
