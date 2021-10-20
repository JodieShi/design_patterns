namespace TemplateMethodPattern {
  export class AbstractClass {
    public TemplateMethod() : void {
      this.SpecificMethod();
      this.abstractMethod1();
      this.abstractMethod2();
    }

    public SpecificMethod() : void {
      console.log("[Template Method Pattern] Call specific method.");
    }

    public abstractMethod1() : void {};
    public abstractMethod2() : void {};
  }

  export class ConcreteClass extends AbstractClass {
    constructor() {
      super();
    }

    public abstractMethod1() : void {
      console.log("[Template Method Pattern] Call abstract method1.");
    }

    public abstractMethod2() : void {
      console.log("[Template Method Pattern] Call abstract method2.");
    }
  }
}
