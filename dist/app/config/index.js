"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '/.env') });
exports.default = {
    port: process.env.PORT,
    database_url: process.env.MONGODB_URI,
    supper_admin_password: process.env.SUPER_A_PASSWORD,
    bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_access_token_duration: process.env.JWT_ACCESS_TOKEN_DURATION,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
    jwt_refresh_token_duration: process.env.JWT_REFRESH_TOKEN_DURATION,
    nodemailer_host: process.env.NODEMAILER_HOST,
    nodemailer_port: process.env.NODEMAILER_PORT,
    nodemailer_user_email: process.env.NODEMAILER_USER_EMAIL,
    nodemailer_user_pass: process.env.NODEMAILER_USER_PASS,
};
