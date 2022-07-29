"use strict";

exports.__esModule = true;
exports.app = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

require("express-async-errors");

var _users = require("./users.routes");

var _ThrowAppErrorController = require("../../../dist/modules/Error/useCases/throwError/ThrowAppErrorController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
exports.app = app;
const errorHandler = new _ThrowAppErrorController.ThrowAppErrorController().handle;
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json());
app.use((0, _cors.default)());
app.use(_users.usersRoutes);
app.use(errorHandler);