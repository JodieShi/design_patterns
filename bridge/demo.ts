/// <reference path="./bridge.ts" />

namespace BridgePattern {
  export namespace Demo {
    export function show() : void {
      const implA : BridgePattern.Implementor = new BridgePattern.ConcreteImplementorA()
      const raA : BridgePattern.RefinedAbstraction = new BridgePattern.RefinedAbstraction(implA)
      raA.Operation()

      const implB : BridgePattern.Implementor = new BridgePattern.ConcreteImplementorB()
      const raB : BridgePattern.RefinedAbstraction = new BridgePattern.RefinedAbstraction(implB)
      raB.Operation()
    }
  }
}
