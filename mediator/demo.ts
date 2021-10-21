/// <reference path="./mediator.ts" />

namespace MediatorPattern {
  export namespace Demo {
    export function show() : void {
      const md : MediatorPattern.Mediator = new MediatorPattern.ConcreteMediator();
      const c1 : MediatorPattern.Colleague = new MediatorPattern.ConcreteColleague1();
      const c2 : MediatorPattern.Colleague = new MediatorPattern.ConcreteColleague2();

      md.register(c1);
      md.register(c2);

      c1.send();
      c2.send();
    }
  }
}
