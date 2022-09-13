const os = require('os');

var totalMemo = os.totalmem();
var freeMemo = os.freemem();

// console.log('Total memory: ' + totalMemo);
// console.log('Free memory: ' + freeMemo);

// template string

console.log(`Total memory: ${totalMemo}`);
console.log(`Free memory: ${freeMemo}`);