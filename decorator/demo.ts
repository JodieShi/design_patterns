/// <reference path="./decorator.ts" />

namespace DecoratorPattern {
  export namespace Demo {
    export function show() : void {
      const com : DecoratorPattern.Component = new DecoratorPattern.ConcreteComponent();
      const decorator1 : DecoratorPattern.Decorator = new DecoratorPattern.ConcreteDecorator1(com);
      const decorator2 : DecoratorPattern.Decorator = new DecoratorPattern.ConcreteDecorator2(com);

      decorator1.Operation();
      decorator2.Operation();
    }
  }
}
