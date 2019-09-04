const winston = require('winston');
winston.configure({
	transports: [new winston.transports.Console()],
	format: winston.format.combine(
		winston.format.splat(),
		winston.format.colorize(),
		winston.format.simple()
	),
});
module.exports = winston;
