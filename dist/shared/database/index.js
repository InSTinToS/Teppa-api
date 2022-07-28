"use strict";

exports.__esModule = true;
exports.default = void 0;

var _app = require("firebase/app");

const {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
} = process.env;
const config = {
  appId: APP_ID,
  apiKey: API_KEY,
  projectId: PROJECT_ID,
  authDomain: AUTH_DOMAIN,
  measurementId: MEASUREMENT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID
};
const db = (0, _app.initializeApp)(config);
var _default = db;
exports.default = _default;