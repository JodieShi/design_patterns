/// <reference path="./builder.ts" />

namespace BuilderPattern {
  export namespace Demo {
    export function show() : void {
      const builder : BuilderPattern.ConcreteBuilder = new BuilderPattern.ConcreteBuilder()
      const director : BuilderPattern.Director = new BuilderPattern.Director(builder);
      const product : BuilderPattern.Product = director.buildProduct();

      product.show();
    }
  }
}
