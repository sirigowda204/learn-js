// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg(){
    console.log('Error: ${this.errMsg}');
}

const o = {
    val: [1,2,3],
    errMsg: 'This is an error'
};

logMsg(o);