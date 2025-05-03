"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("../config"));
const sendMail = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for port 465, false for other ports
        auth: {
            user: config_1.default.nodemailer_user_email,
            pass: config_1.default.nodemailer_user_pass,
        },
    });
    yield transporter.sendMail({
        from: "medimart@gmail.com",
        to: "jmjubaer3927@gmail.com",
        subject: `Got mail form portfolio for contact me`,
        text: `Get message from ${data === null || data === void 0 ? void 0 : data.name}`,
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
                        <p><strong>Name:</strong> ${data === null || data === void 0 ? void 0 : data.name}</p>
                        <p><strong>Phone:</strong>  ${data === null || data === void 0 ? void 0 : data.phone}</p>
                        <p><strong>Email:</strong>  ${data === null || data === void 0 ? void 0 : data.email}</p>
                        <p><strong>Subject:</strong>  ${data === null || data === void 0 ? void 0 : data.subject}</p>
                        <p><strong>Message:</strong></p>
                        <div style="background-color: #f1f1f1; padding: 15px; border-radius: 6px; margin-top: 5px;">
                         ${data === null || data === void 0 ? void 0 : data.message}
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
});
exports.sendMail = sendMail;
