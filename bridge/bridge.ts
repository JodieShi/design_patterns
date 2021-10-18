namespace BridgePattern {

  export interface Implementor {
    OperationImpl(params?: any) : void;
  }

  export class ConcreteImplementorA implements Implementor {
    OperationImpl(params?: any) : void {
      console.log("[Bridge Pattern] Concrete operation implement A.");
    }
  }

  export class ConcreteImplementorB implements Implementor {
    OperationImpl(params?: any) : void {
      console.log("[Bridge Pattern] Concrete operation implement B.");
    }
  }

  abstract class Abstraction {
    protected imple: Implementor;

    constructor(imple) {
      this.imple = imple;
    }

    abstract Operation(params?: any) : void;
  }

  export class RefinedAbstraction extends Abstraction {
    constructor(imple) {
      super(imple);
    }

    Operation(params?: any) : void {
      console.log("[Bridge Pattern] Refined abstraction operation.");
      this.imple.OperationImpl(params);
    }
  }
}
