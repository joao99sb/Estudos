"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
// yarn add @types/express
// yarn tsc e a pasta do arquivo
var routes_1 = __importDefault(require("./routes"));
// yarn add cors para permitir quais urls podem acessar o backend
// yarn add @types/cors
var cors_1 = __importDefault(require("cors"));
app.use(cors_1.default());
app.use(routes_1.default);
app.listen(3333);
