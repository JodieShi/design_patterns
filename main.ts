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
/// <reference path="./template_method/demo.ts" />
/// <reference path="./strategy/demo.ts" />
/// <reference path="./command/demo.ts" />
/// <reference path="./responsibility_chain/demo.ts" />
/// <reference path="./state/demo.ts" />
/// <reference path="./observer/demo.ts" />
/// <reference path="./mediator/demo.ts" />
/// <reference path="./iterator/demo.ts" />
/// <reference path="./visitor/demo.ts" />
/// <reference path="./memento/demo.ts" />
/// <reference path="./interpreter/demo.ts" />


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
                "  12: Composite\n" +
                "== Behavior Patterns == \n" +
                "  13: Template Method\n" +
                "  14: Strategy\n" +
                "  15: Command\n" +
                "  16: Responsibility chain\n" +
                "  17: State\n" +
                "  18: Observer\n" +
                "  19: Mediator\n" +
                "  20: Iterator\n" +
                "  21: Visitor\n" +
                "  22: Memento\n" +
                "  23: Interpreter\n";

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
    rl.question('Which pattern would you like to check?   ', function(answer: string) {
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
        case 13:
          show(TemplateMethodPattern);
          break;
        case 14:
          show(StrategyPattern);
          break;
        case 15:
          show(CommandPattern);
          break;
        case 16:
          show(ResponsibilityChainPattern);
          break;
        case 17:
          show(StatePattern);
          break;
        case 18:
          show(ObserverPattern);
          break;
        case 19:
          show(MediatorPattern);
          break;
        case 20:
          show(IteratorPattern);
          break;
        case 21:
          show(VisitorPattern);
          break;
        case 22:
          show(MementoPattern);
          break;
        case 23:
          show(InterpreterPattern);
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
