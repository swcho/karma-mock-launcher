var fs = require('fs');

var sClass;

// PUBLISH DI MODULE
module.exports = {
    'addClass': function(aClass) {
        sClass = aClass;
    },
    'launcher:Mock': ['type', sClass]
};
