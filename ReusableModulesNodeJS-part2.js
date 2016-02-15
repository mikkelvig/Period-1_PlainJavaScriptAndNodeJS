/**
 * Created by Mikkel on 15-02-2016.
 */

var fs = require('fs');
var path = require('path');
// i export a function:
module.exports = function (directory, filterByString, callbackMetode) {

    fs.readdir(directory, function (err, listOfShit) {
        if (err)// in case of error, err is sent with the callback
            return callbackMetode(err);
        // the list is filtered
        listOfShit = listOfShit.filter(function (file) {

            return path.extname(file) === '.' + filterByString
        });
        // list is sent back with the callback
        callbackMetode(null, listOfShit)
    })
};