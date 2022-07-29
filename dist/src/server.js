'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
require('dotenv/config')
require('module-alias/register')
require('reflect-metadata')
require('@shared/containers')
const routes_1 = require('@shared/routes')
const port = process.env.PORT
routes_1.app.listen(port, () => console.log(`Running at ${port}`))
