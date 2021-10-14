/// <reference path="./abstract_factory.ts" />

namespace AbstractFactoryPattern {
  export namespace Demo {
    export function show() : void {
      const f1 : AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.ConcreteFactory1();
      const a1 = f1.createProductA();
      const b1 = f1.createProductB();
      const f2 : AbstractFactoryPattern.AbstractFactory = new AbstractFactoryPattern.ConcreteFactory2();
      const a2 = f2.createProductA();
      const b2 = f2.createProductB();
      a1.show();
      b1.show();
      a2.show();
      b2.show();
    }
  }
}
