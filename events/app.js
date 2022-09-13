const EventEmitter = require('events'); // class

const Logger = require('./logger');
const logger = new Logger();

// registrar um listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');