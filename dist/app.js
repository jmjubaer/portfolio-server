"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const GlobalErrorHandler_1 = require("./app/errors/GlobalErrorHandler");
const SendMil_1 = require("./app/utils/SendMil");
const sendResponse_1 = __importDefault(require("./app/utils/sendResponse"));
const project_route_1 = require("./app/modules/projects/project.route");
const skill_routes_1 = require("./app/modules/skills/skill.routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "https://jm-jubaer.vercel.app"],
    credentials: true,
}));
app.use(express_1.default.json());
// routes =====
app.use("/skills", skill_routes_1.skillRoutes);
app.use("/projects", project_route_1.projectRoutes);
app.get("/", (req, res) => {
    res.send("server is running");
});
app.post("/sendMessage", (req, res) => {
    const data = req.body;
    (0, SendMil_1.sendMail)(data);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Send Mail Successfully",
        data: data,
    });
});
// global error handler =====
app.use(GlobalErrorHandler_1.globalErrorHandler);
// not found error handler =====
// app.all('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Page not found',
//   });
// });
exports.default = app;
