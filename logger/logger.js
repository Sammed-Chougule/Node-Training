const path = require("path");
const { createLogger, transports, format } = require("winston");
require("winston-mongodb");

const logger = createLogger({
  transports: [
    new transports.File({
      filename: path.join(__dirname, "info.log"),
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      filename: path.join(__dirname, "error.log"),
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      filename: path.join(__dirname, "debug.log"),
      level: "debug",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = logger;
