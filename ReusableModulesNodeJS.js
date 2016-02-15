/**
 * Created by Mikkel on 15-02-2016.
 */

var filtrerDetLort = require('./ReusableModulesNodeJS-part2.js');
// i make sure i can use a filter from another file
var directory = process.argv[2]; // arg 1 = name of directory
var filterByString = process.argv[3]; // arg 2 = type of file

// i use the filter
filtrerDetLort (directory, filterByString, function (err, list) {
    if (err) // if err = true, an error-message is logged
        return console.error('Noget gik helt vildt galt... ', err);

    // if everything is fine this happens:
    list.forEach(function (fileInList) {
        // all filenames in list is logged
        console.log(fileInList);
    })
});
