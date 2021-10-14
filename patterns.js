var SingletonPattern;
(function (SingletonPattern) {
    var Singleton = /** @class */ (function () {
        function Singleton() {
        }
        /**
         * getInstance
         */
        Singleton.getInstance = function () {
            if (!Singleton.singleton) {
                Singleton.singleton = new Singleton();
            }
            return Singleton.singleton;
        };
        return Singleton;
    }());
    SingletonPattern.Singleton = Singleton;
})(SingletonPattern || (SingletonPattern = {}));
/// <reference path="./singleton.ts" />
var SingletonPattern;
/// <reference path="./singleton.ts" />
(function (SingletonPattern) {
    var Demo;
    (function (Demo) {
        function show() {
            var singleton1 = SingletonPattern.Singleton.getInstance();
            var singleton2 = SingletonPattern.Singleton.getInstance();
            if (singleton1 === singleton2) {
                console.log("[Singleton] Two singletons are equivalent");
            }
            else {
                console.log("[Singleton] Two singletons are not equivalent");
            }
        }
        Demo.show = show;
    })(Demo = SingletonPattern.Demo || (SingletonPattern.Demo = {}));
})(SingletonPattern || (SingletonPattern = {}));
var PrototypePattern;
(function (PrototypePattern) {
    var Concrete1 = /** @class */ (function () {
        function Concrete1() {
        }
        Concrete1.prototype.clone = function () {
            return new Concrete1();
        };
        Concrete1.prototype.toString = function () {
            return "[Prototype] This is concrete1";
        };
        return Concrete1;
    }());
    PrototypePattern.Concrete1 = Concrete1;
    var Concrete2 = /** @class */ (function () {
        function Concrete2() {
        }
        Concrete2.prototype.clone = function () {
            return new Concrete2();
        };
        Concrete2.prototype.toString = function () {
            return "[Prototype] This is concrete2";
        };
        return Concrete2;
    }());
    PrototypePattern.Concrete2 = Concrete2;
    var Concrete3 = /** @class */ (function () {
        function Concrete3() {
        }
        Concrete3.prototype.clone = function () {
            return new Concrete3();
        };
        Concrete3.prototype.toString = function () {
            return "[Prototype] This is concrete3";
        };
        return Concrete3;
    }());
    PrototypePattern.Concrete3 = Concrete3;
    var Builder = /** @class */ (function () {
        function Builder() {
            this.prototypeMap = {};
            this.prototypeMap['c1'] = new Concrete1();
            this.prototypeMap['c2'] = new Concrete2();
            this.prototypeMap['c3'] = new Concrete3();
        }
        Builder.prototype.createOne = function (s) {
            console.log(s);
            return this.prototypeMap[s].clone();
        };
        return Builder;
    }());
    PrototypePattern.Builder = Builder;
})(PrototypePattern || (PrototypePattern = {}));
/// <reference path="./prototype.ts" />
var PrototypePattern;
/// <reference path="./prototype.ts" />
(function (PrototypePattern) {
    var Demo;
    (function (Demo) {
        function show() {
            var builder = new PrototypePattern.Builder();
            for (var i = 1; i <= 3; i++) {
                console.log(builder.createOne('c' + i).toString());
            }
        }
        Demo.show = show;
    })(Demo = PrototypePattern.Demo || (PrototypePattern.Demo = {}));
})(PrototypePattern || (PrototypePattern = {}));
var FactoryMethodPattern;
(function (FactoryMethodPattern) {
    var ConcreteProductA = /** @class */ (function () {
        function ConcreteProductA() {
            this.show = function (param) {
                console.log("[Factory Method] Concrete product A showing...");
            };
        }
        return ConcreteProductA;
    }());
    FactoryMethodPattern.ConcreteProductA = ConcreteProductA;
    var ConcreteProductB = /** @class */ (function () {
        function ConcreteProductB() {
            this.show = function (param) {
                console.log("[Factory Method] Concrete product B showing...");
            };
        }
        return ConcreteProductB;
    }());
    FactoryMethodPattern.ConcreteProductB = ConcreteProductB;
    var ConcreteFactoryA = /** @class */ (function () {
        function ConcreteFactoryA() {
        }
        ConcreteFactoryA.prototype.createProduct = function () {
            return new ConcreteProductA();
        };
        return ConcreteFactoryA;
    }());
    FactoryMethodPattern.ConcreteFactoryA = ConcreteFactoryA;
    var ConcreteFactoryB = /** @class */ (function () {
        function ConcreteFactoryB() {
        }
        ConcreteFactoryB.prototype.createProduct = function () {
            return new ConcreteProductB();
        };
        return ConcreteFactoryB;
    }());
    FactoryMethodPattern.ConcreteFactoryB = ConcreteFactoryB;
})(FactoryMethodPattern || (FactoryMethodPattern = {}));
var SimpleFactoryPattern;
(function (SimpleFactoryPattern) {
    var ConcreteProductA = /** @class */ (function () {
        function ConcreteProductA() {
            this.show = function (params) {
                console.log("[Simple Factory] Concrete product A showing...");
            };
        }
        return ConcreteProductA;
    }());
    SimpleFactoryPattern.ConcreteProductA = ConcreteProductA;
    var ConcreteProductB = /** @class */ (function () {
        function ConcreteProductB() {
            this.show = function (params) {
                console.log("[Simple Factory] Concrete product B showing...");
            };
        }
        return ConcreteProductB;
    }());
    SimpleFactoryPattern.ConcreteProductB = ConcreteProductB;
    var SimpleFactory;
    (function (SimpleFactory) {
        function createProduct(type) {
            if (type === 'A') {
                return new ConcreteProductA();
            }
            else if (type === 'B') {
                return new ConcreteProductB();
            }
            return null;
        }
        SimpleFactory.createProduct = createProduct;
    })(SimpleFactory = SimpleFactoryPattern.SimpleFactory || (SimpleFactoryPattern.SimpleFactory = {}));
})(SimpleFactoryPattern || (SimpleFactoryPattern = {}));
var AbstractFactoryPattern;
(function (AbstractFactoryPattern) {
    var ConcreteProductA1 = /** @class */ (function () {
        function ConcreteProductA1() {
            this.show = function (param) {
                console.log("[Abstract Factory] Concrete product A1 showing...");
            };
        }
        return ConcreteProductA1;
    }());
    AbstractFactoryPattern.ConcreteProductA1 = ConcreteProductA1;
    var ConcreteProductB1 = /** @class */ (function () {
        function ConcreteProductB1() {
            this.show = function (param) {
                console.log("[Abstract Factory] Concrete product B1 showing...");
            };
        }
        return ConcreteProductB1;
    }());
    AbstractFactoryPattern.ConcreteProductB1 = ConcreteProductB1;
    var ConcreteProductA2 = /** @class */ (function () {
        function ConcreteProductA2() {
            this.show = function (param) {
                console.log("[Abstract Factory] Concrete product A2 showing...");
            };
        }
        return ConcreteProductA2;
    }());
    AbstractFactoryPattern.ConcreteProductA2 = ConcreteProductA2;
    var ConcreteProductB2 = /** @class */ (function () {
        function ConcreteProductB2() {
            this.show = function (param) {
                console.log("[Abstract Factory] Concrete product B2 showing...");
            };
        }
        return ConcreteProductB2;
    }());
    AbstractFactoryPattern.ConcreteProductB2 = ConcreteProductB2;
    var ConcreteFactory1 = /** @class */ (function () {
        function ConcreteFactory1() {
        }
        ConcreteFactory1.prototype.createProductA = function () {
            return new ConcreteProductA1();
        };
        ConcreteFactory1.prototype.createProductB = function () {
            return new ConcreteProductB1();
        };
        return ConcreteFactory1;
    }());
    AbstractFactoryPattern.ConcreteFactory1 = ConcreteFactory1;
    var ConcreteFactory2 = /** @class */ (function () {
        function ConcreteFactory2() {
        }
        ConcreteFactory2.prototype.createProductA = function () {
            return new ConcreteProductA2();
        };
        ConcreteFactory2.prototype.createProductB = function () {
            return new ConcreteProductB2();
        };
        return ConcreteFactory2;
    }());
    AbstractFactoryPattern.ConcreteFactory2 = ConcreteFactory2;
})(AbstractFactoryPattern || (AbstractFactoryPattern = {}));
/// <reference path="./singleton/demo.ts" />
/// <reference path="./prototype/demo.ts" />
/// <reference path="./factory_method/factory_method.ts" />
/// <reference path="./simple_factory/simple_factory.ts" />
/// <reference path="./abstract_factory/abstract_factory.ts" />
var readline = require('readline');
var Patterns;
(function (Patterns) {
    function printMenu() {
        var menu = "= Creational Patterns == \n" +
            "  1: Singleton \n" +
            "  2: Prototype \n" +
            "  3.1: Simple factory\n" +
            "  3.2: Factory method\n" +
            "  4: Abstract factory";
        console.log("\n\n");
        console.log("==== Choose one pattern to demonstrate ====");
        console.log("\n");
        console.log(menu);
    }
    function menu() {
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        printMenu();
        rl.question('Which pattern would you like to check?   ', function (answer) {
            switch (+answer) {
                case 1:
                    show(SingletonPattern);
                    break;
                case 2:
                    show(PrototypePattern);
                    break;
                case 3.1:
                    show(SimpleFactoryPattern);
                    break;
                case 3.2:
                    show(FactoryMethodPattern);
                    break;
                case 4:
                    show(AbstractFactoryPattern);
                    break;
                default:
                    break;
            }
            rl.close();
        });
    }
    Patterns.menu = menu;
    function show(Pattern) {
        Pattern.Demo.show();
    }
})(Patterns || (Patterns = {}));
Patterns.menu();
/// <reference path="./simple_factory.ts" />
var SimpleFactoryPattern;
/// <reference path="./simple_factory.ts" />
(function (SimpleFactoryPattern) {
    var Demo;
    (function (Demo) {
        function show() {
            var a = SimpleFactoryPattern.SimpleFactory.createProduct('A');
            var b = SimpleFactoryPattern.SimpleFactory.createProduct('B');
            a.show();
            b.show();
        }
        Demo.show = show;
    })(Demo = SimpleFactoryPattern.Demo || (SimpleFactoryPattern.Demo = {}));
})(SimpleFactoryPattern || (SimpleFactoryPattern = {}));
/// <reference path="./factory_method.ts" />
var FactoryMethodPattern;
/// <reference path="./factory_method.ts" />
(function (FactoryMethodPattern) {
    var Demo;
    (function (Demo) {
        function show() {
            var af = new FactoryMethodPattern.ConcreteFactoryA();
            var a = af.createProduct();
            var bf = new FactoryMethodPattern.ConcreteFactoryB();
            var b = bf.createProduct();
            a.show();
            b.show();
        }
        Demo.show = show;
    })(Demo = FactoryMethodPattern.Demo || (FactoryMethodPattern.Demo = {}));
})(FactoryMethodPattern || (FactoryMethodPattern = {}));
/// <reference path="./abstract_factory.ts" />
var AbstractFactoryPattern;
/// <reference path="./abstract_factory.ts" />
(function (AbstractFactoryPattern) {
    var Demo;
    (function (Demo) {
        function show() {
            var f1 = new AbstractFactoryPattern.ConcreteFactory1();
            var a1 = f1.createProductA();
            var b1 = f1.createProductB();
            var f2 = new AbstractFactoryPattern.ConcreteFactory2();
            var a2 = f2.createProductA();
            var b2 = f2.createProductB();
            a1.show();
            b1.show();
            a2.show();
            b2.show();
        }
        Demo.show = show;
    })(Demo = AbstractFactoryPattern.Demo || (AbstractFactoryPattern.Demo = {}));
})(AbstractFactoryPattern || (AbstractFactoryPattern = {}));
