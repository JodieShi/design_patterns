/// <reference path="./simple_factory.ts" />

namespace SimpleFactoryPattern {
  export namespace Demo {
    export function show() : void {
      const a : SimpleFactoryPattern.AbstractProduct = SimpleFactoryPattern.SimpleFactory.createProduct('A');
      const b : SimpleFactoryPattern.AbstractProduct = SimpleFactoryPattern.SimpleFactory.createProduct('B');

      a.show();
      b.show();
    }
  }
}
