const app = require("./app.js"); // la aplicación Express real
const http = require("http");
const config = require("./src/utils/config.js");
const logger = require("./src/utils/logger.js");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
