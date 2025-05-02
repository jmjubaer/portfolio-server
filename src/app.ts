import express from "express";
import cors from "cors";

import { globalErrorHandler } from "./app/errors/GlobalErrorHandler";
import { sendMail } from "./app/utils/SendMil";
import sendResponse from "./app/utils/sendResponse";
import { projectRoutes } from "./app/modules/projects/project.route";
import { skillRoutes } from "./app/modules/skills/skill.routes";
const app = express();

app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
);

// routes =====
app.use("/skills", skillRoutes);
app.use("/projects", projectRoutes);
app.get("/", (req, res) => {
    res.send("server is running");
});
app.post("/sendMessage", (req, res) => {
    const data = req.body;
    sendMail(data);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Send Mail Successfully",
        data: data,
    });
});

// global error handler =====
app.use(globalErrorHandler);

// not found error handler =====
// app.all('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Page not found',
//   });
// });

export default app;
