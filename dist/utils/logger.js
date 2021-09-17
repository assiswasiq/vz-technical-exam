"use strict";var _winston=require("winston");var _dotenv=_interopRequireDefault(require("dotenv"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var combine=_winston.format.combine,timestamp=_winston.format.timestamp,label=_winston.format.label,json=_winston.format.json;_dotenv["default"].config({path:".env"});var logger=(0,_winston.createLogger)({format:combine(label({label:"".concat(process.env.NODE_ENV)}),timestamp(),json()),transports:[new _winston.transports.Console({timestamp:true,level:"error",colorize:true})]});if(process.env.NODE_ENV!=="prod"){logger.debug("Logging initialized at debug level")}module.exports=logger;
//# sourceMappingURL=logger.js.map