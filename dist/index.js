"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sing = void 0;
const zod_1 = __importDefault(require("zod"));
exports.sing = zod_1.default.object({
    username: zod_1.default.string().min(5).max(20),
    password: zod_1.default.string().max(20).min(5)
});
console.log("hi there ");
