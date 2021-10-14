/// <reference path="./factory_method.ts" />

namespace FactoryMethodPattern {
  export namespace Demo {
    export function show() : void {
      const af: FactoryMethodPattern.AbstractFactory = new FactoryMethodPattern.ConcreteFactoryA();
      const a = af.createProduct();
      const bf: FactoryMethodPattern.AbstractFactory = new FactoryMethodPattern.ConcreteFactoryB();
      const b = bf.createProduct();

      a.show();
      b.show();
    }
  }
}
