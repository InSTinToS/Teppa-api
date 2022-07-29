"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID } = process.env;
const config = {
    appId: APP_ID,
    apiKey: API_KEY,
    projectId: PROJECT_ID,
    authDomain: AUTH_DOMAIN,
    measurementId: MEASUREMENT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID
};
const db = (0, app_1.initializeApp)(config);
exports.default = db;
