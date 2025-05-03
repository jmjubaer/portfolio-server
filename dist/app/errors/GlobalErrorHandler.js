"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const zod_1 = require("zod");
const handleZodError_1 = __importDefault(require("./handleZodError"));
const handleValidationError_1 = __importDefault(require("./handleValidationError"));
const handleCastError_1 = __importDefault(require("./handleCastError"));
const handleDuplicateError_1 = __importDefault(require("./handleDuplicateError"));
const AppError_1 = __importDefault(require("./AppError"));
const globalErrorHandler = (error, req, res, next) => {
    let statusCode = error.statusCode || 500;
    let message = error.message || 'Something went wrong';
    let errorSources = [
        {
            path: '',
            message: 'something went wrong',
        },
    ];
    if (error instanceof zod_1.ZodError) {
        const formattedError = (0, handleZodError_1.default)(error);
        message = formattedError.message;
        statusCode = formattedError.statusCode;
        errorSources = formattedError.errorSources;
    }
    else if ((error === null || error === void 0 ? void 0 : error.name) === 'ValidationError') {
        const formattedError = (0, handleValidationError_1.default)(error);
        message = formattedError.message;
        statusCode = formattedError.statusCode;
        errorSources = formattedError.errorSources;
    }
    else if ((error === null || error === void 0 ? void 0 : error.name) === 'CastError') {
        const formattedError = (0, handleCastError_1.default)(error);
        message = formattedError.message;
        statusCode = formattedError.statusCode;
        errorSources = formattedError.errorSources;
    }
    else if ((error === null || error === void 0 ? void 0 : error.code) === 11000) {
        const formattedError = (0, handleDuplicateError_1.default)(error);
        message = formattedError.message;
        statusCode = formattedError.statusCode;
        errorSources = formattedError.errorSources;
    }
    else if (error instanceof AppError_1.default) {
        statusCode = error.statusCode;
        message = error.message;
        errorSources = [
            {
                path: '',
                message: error.message,
            },
        ];
    }
    else if (error instanceof Error) {
        message = error.message;
        errorSources = [
            {
                path: '',
                message: error.message,
            },
        ];
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        // error,
        // stack: config.NODE_ENV === 'Development' ? error?.stack : null,
    });
};
exports.globalErrorHandler = globalErrorHandler;
