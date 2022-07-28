"use strict";

require("dotenv/config");

require("reflect-metadata");

require("@shared/containers");

var _routes = require("@shared/routes");

const port = process.env.API_PORT;

_routes.app.listen(port, () => console.log(`Running at ${port}`));