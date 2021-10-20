/// <reference path="./responsibility_chain.ts" />

namespace ResponsibilityChainPattern {
  export namespace Demo {
    export function show() : void {
      const handler1 : ResponsibilityChainPattern.Handler = new ResponsibilityChainPattern.ConcreteHandler1();
      const handler2 : ResponsibilityChainPattern.Handler = new ResponsibilityChainPattern.ConcreteHandler2();

      handler1.setNext(handler2);
      handler1.handleRequest("two");
    }
  }
}
