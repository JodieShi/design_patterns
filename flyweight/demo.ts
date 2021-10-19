/// <reference path="./flyweight.ts" />

namespace FlyweightPattern {
  export namespace Demo {
    export function show() : void {
      const factory : FlyweightPattern.FlyweightFactory = new FlyweightPattern.FlyweightFactory();
      const f01 = factory.getFlyweight('a')
      const f02 = factory.getFlyweight('a')
      const f03 = factory.getFlyweight('a')
      const f11 = factory.getFlyweight('b')
      const f12 = factory.getFlyweight('b')

      f01.operation(new FlyweightPattern.UnsharedConcreteFlyweight(`call 'a' for the first time.`));
      f02.operation(new FlyweightPattern.UnsharedConcreteFlyweight(`call 'a' for the second time.`));
      f03.operation(new FlyweightPattern.UnsharedConcreteFlyweight(`call 'a' for the third time.`));
      f11.operation(new FlyweightPattern.UnsharedConcreteFlyweight(`call 'b' for the first time.`));
      f12.operation(new FlyweightPattern.UnsharedConcreteFlyweight(`call 'b' for the second time.`));
    }
  }
}
