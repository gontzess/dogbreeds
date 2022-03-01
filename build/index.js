"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dogserver_1 = __importDefault(require("./dogserver"));
const PORT = 3000;
dogserver_1.default.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
