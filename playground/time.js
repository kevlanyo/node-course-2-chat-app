var moment = require('moment');


var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);
var date = moment();
// date.add(100,'years').subtract(9,'months');
console.log(date.format('h:mm a'));
