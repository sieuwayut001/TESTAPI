"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const post_controller_1 = __importDefault(require("../controllers/post.controller"));
/* GET home page. */
//create mới dữ liệu vào db
router.post('/', post_controller_1.default.create);
router.get('/', post_controller_1.default.findAll);
router.get('/:id', post_controller_1.default.findById);
router.put('/:id', post_controller_1.default.update);
router.delete('/:id', post_controller_1.default.delete);
exports.default = router;
