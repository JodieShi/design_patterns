/// <reference path="./singleton/demo.ts" />
/// <reference path="./prototype/demo.ts" />
/// <reference path="./factory_method/demo.ts" />
/// <reference path="./simple_factory/demo.ts" />
/// <reference path="./abstract_factory/demo.ts" />
/// <reference path="./builder/demo.ts" />
/// <reference path="./proxy/demo.ts" />
/// <reference path="./adapter/demo.ts" />
/// <reference path="./bridge/demo.ts" />
/// <reference path="./decorator/demo.ts" />
/// <reference path="./facade/demo.ts" />
/// <reference path="./flyweight/demo.ts" />
/// <reference path="./composite/demo.ts" />


declare var require : (moduleId : string) => any;
declare var process : any;

var readline = require('readline');

namespace Patterns {
  function printMenu() : void {
    var menu =	"== Creational Patterns == \n" +
                "  1: Singleton \n" +
                "  2: Prototype \n" +
                "  3.1: Simple factory\n" +
                "  3.2: Factory method\n" +
                "  4: Abstract factory\n" +
                "  5: Builder\n" +
                "== Structural Patterns == \n" +
                "  6: Proxy\n" +
                "  7.1: Class adapter\n" +
                "  7.2: Object adapter\n" +
                "  8: Bridge\n" +
                "  9: Decorator\n" +
                "  10: Facade\n" +
                "  11: Flyweight\n" +
                "  12: Composite\n";

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
        case 3.1:
          show(SimpleFactoryPattern);
          break
        case 3.2:
          show(FactoryMethodPattern);
          break;
        case 4:
          show(AbstractFactoryPattern);
          break;
        case 5:
          show(BuilderPattern);
          break;
        case 6:
          show(ProxyPattern);
          break;
        case 7.1:
          show(ClassAdapterPattern);
          break;
        case 7.2:
          show(ObjectAdapterPattern);
          break;
        case 8:
          show(BridgePattern);
          break;
        case 9:
          show(DecoratorPattern);
          break;
        case 10:
          show(FacadePattern);
          break;
        case 11:
          show(FlyweightPattern);
          break;
        case 12:
          show(CompositePattern);
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
