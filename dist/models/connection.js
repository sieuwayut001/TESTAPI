"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// const dbConnectionUrl = process.env.MONGO_DB_URL || '';
const dbConnectionUrl = mongoose_1.default.connect(process.env.MONGO_DB_URL)
    .then(data => {
    console.log('Connection success');
})
    .catch(err => {
    console.log('Connection error' + err);
});
exports.default = dbConnectionUrl;
// , {useNewUrlParser: true, useUnifiedTopology: true}
