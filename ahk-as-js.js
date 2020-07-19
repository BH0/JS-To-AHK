// A NodeJS script (module) for generating "basic" AutoHotKey scripts written in JS (not a transpiler)
let fs = require("fs"); 
let AhkAsJs = function() { // is technically a class 
    this.scriptString = ``; // may become _scriptString; 
    this.msgBox = function msgBox(output) {
        this.scriptString += `\nMsgBox, ${output}`; 
    }
    this.mouseMove = function mouseMove(x, y, speed) {
        if (speed === undefined) speed = 4;
        this.scriptString += `\nMouseMove, ${x}, ${y}, ${speed}`
    } 
    this.send = function send(input) { // may rename this to something such as "type(input)"
        this.scriptString += `\nSend, ${input}`; 
    }
    this.ahk = function ahk(customScriptString) { // should this take user's desired scriptString and replace the local scriptString 
        /* if (enterAHK == undefined) {
            return; 
        } */
        //enterAHK(); // this is a user inputted function 
        this.scriptString += customScriptString; 
    }
    this.createScript = function createScript() {
        fs.writeFile('script.ahk', this.scriptString, function (err) {
            if (err) throw err;
            console.log('It\'s saved!');
        });          
    }
    this.test = function() {
        console.log("ahk-as-js is working correctly")
    }
} 
// let ahkAsJs = new AhkAsJs();
module.exports.AhkAsJs = AhkAsJs; 

/* 
module.exports.ahkAsJs = { 
    // fs = require("fs"); 
    // let scriptString = ``; 
    msgBox: function msgBox(output) {
        scriptString += `\nMsgBox ${output}`; 
    }, 
    mouseMove: function mouseMove(x, y, speed) {
        if (speed === undefined) speed = 4;
        scriptString += `\nMouseMove, ${x}, ${y}, ${speed}`
    }, 
    ahk: function ahk() {
        if (enterAHK == undefined) {
            return; 
        } 
        enterAHK(); // this is a user inputted function 
    }
} 
*/ 

