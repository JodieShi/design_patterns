namespace DecoratorPattern {
  export interface Component {
    Operation(params?: any) : void;
  }

  export class ConcreteComponent implements Component {
    Operation(params?: any) : void {
      console.log("[Decorator Pattern] Concrete component operating...");
    };
  }

  export class Decorator implements Component {
    private component: Component;

    constructor(component: Component) {
      this.component = component;
    }
    
    Operation(params?: any) : void {
      console.log("[Decorator Pattern] Decorator operating...");
      this.component.Operation()
    };
  }

  export class ConcreteDecorator1 extends Decorator {
    constructor(component: Component) {
      super(component);
    }

    addedFunction() {
      console.log("[Decorator Pattern] Added function from concrete decorator1.");
    }

    Operation(params?: any) {
      super.Operation(params);
      this.addedFunction();
    }
  }

  export class ConcreteDecorator2 extends Decorator {
    constructor(component: Component) {
      super(component);
    }

    addedFunction() {
      console.log("[Decorator Pattern] Added function from concrete decorator2.");
    }

    Operation(params?: any) {
      super.Operation(params);
      this.addedFunction();
    }
  }
}
