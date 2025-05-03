"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeOrderStatusSchema = exports.createOrderValidationSchema = void 0;
const zod_1 = require("zod");
exports.createOrderValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        user: zod_1.z.string({ required_error: 'User is required' }),
        product: zod_1.z.string({ required_error: 'Product is required' }),
        deliveryInfo: zod_1.z.object({
            name: zod_1.z.string().min(1, 'Full name is required'),
            phoneNumber: zod_1.z
                .string()
                .min(10, 'Phone number must be at least 10 digits'),
            localAddress: zod_1.z.string().min(1, 'Local address is required'),
            city: zod_1.z.string().min(1, 'City is required'),
            district: zod_1.z.string().min(1, 'District is required'),
            thana: zod_1.z.string().min(1, 'Thana is required'),
            postalCode: zod_1.z
                .number()
                .min(4, 'Postal code must be at least 4 characters'),
        }),
        quantity: zod_1.z
            .number()
            .int('Quantity must be an integer')
            .positive('Quantity must be a positive number')
            .refine((val) => val > 0, { message: 'Quantity is required' }),
        totalPrice: zod_1.z
            .number()
            .positive('TotalPrice must be a positive number')
            .refine((val) => val > 0, { message: 'TotalPrice is required' }),
    }), // Optional string
});
exports.changeOrderStatusSchema = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z.enum([
            'pending',
            'processing',
            'shipped',
            'delivered',
            'cancelled',
        ]),
    }), // Optional string
});
