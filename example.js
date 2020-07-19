let fs = require("fs"); 
let ahkAsJs = require("./ahk-as-js"); // maybe release this as an NPM module? 
var ahkAsJS = new ahkAsJs.AhkAsJs(); 

ahkAsJS.test(); 
ahkAsJS.msgBox("I am a test"); 
ahkAsJS.mouseMove(100, 100); 
let tempVar = 10000 * 2
ahkAsJS.msgBox("the mouse has moved; "+tempVar); 
ahkAsJS.mouseMove(200, 200, 2); 
function enterAHK() {
    let _scriptString = `
    myVar = 10
    if (myVar <= 20) {
        ${""/* msgBox("HI")*/} 
        MsgBox, hi ${tempVar}
    }            
    Send, i am a test %myVar%
    `.replace(/^ {4}/gm, ''); // replace this with what your VSCode considers as indentation 
    return _scriptString; 
} 
let customScriptString = enterAHK(); 
ahkAsJS.ahk(customScriptString); 
ahkAsJS.msgBox("I just finished running your own code"); 
let items = ["one", "two", "three"]; 
items.forEach(item => {
    ahkAsJS.send(item);
}); 
ahkAsJS.createScript(); 
