// console.log(process.argv[3])
const fs = require('fs');
const argv = process.argv;//argv var is an array of strings containing the command line arguments passed when the Node.js process was launched. The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed. The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command line arguments.

// fs.writeFileSync(argv[2], argv[3])//first argument is the file name and second argument is the content to be written in the file
if(argv[2] == 'add'){
    fs.writeFileSync(argv[3], argv[4])
}
else if(argv[2]== 'remove'){
    fs.unlinkSync(argv[3])
}
else{
    console.log('Wrong input')
}
