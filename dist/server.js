"use strict";

require("dotenv/config");

require("module-alias/register");

require("reflect-metadata");

require("../dist/shared/containers");

var _routes = require("../dist/shared/routes");

const port = process.env.API_PORT;

_routes.app.listen(port, () => console.log(`Running at ${port}`));