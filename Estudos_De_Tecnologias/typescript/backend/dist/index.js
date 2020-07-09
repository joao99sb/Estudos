"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
// yarn add @types/express
// yarn tsc e a pasta do arquivo
app.get('/', function (req, res) {
    return res.send('helo wolrd');
});
app.listen(3333);
