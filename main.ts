/// <reference path="./singleton/demo.ts" />

declare var require : (moduleId : string) => any;
declare var process : any;

var readline = require('readline');

namespace Patterns {
  function printMenu() : void {
    var menu =	"= Creational Patterns == \n" +
                "  1: Singleton \n";

    console.log("\n\n");
    console.log("==== Choose one pattern to demonstrate ====");
    console.log("\n");
    console.log(menu);
  }
  
}
