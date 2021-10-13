/// <reference path="./singleton/demo.ts" />
/// <reference path="./prototype/demo.ts" />


declare var require : (moduleId : string) => any;
declare var process : any;

var readline = require('readline');

namespace Patterns {
  function printMenu() : void {
    var menu =	"= Creational Patterns == \n" +
                "  1: Singleton \n" +
                "  2: Prototype \n";

    console.log("\n\n");
    console.log("==== Choose one pattern to demonstrate ====");
    console.log("\n");
    console.log(menu);
  }
  

  export function menu() : void {
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    printMenu();
    rl.question('Which pattern would you like to check?   ', function(answer) {
      switch (+answer) {
        case 1:
          show(SingletonPattern);
          break;
        case 2:
          show(PrototypePattern);
          break;
        default:
          break;
      }
      rl.close()
    });

  }

  function show(Pattern: any) : void {
    Pattern.Demo.show();
  }
}

Patterns.menu()
