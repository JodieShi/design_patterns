namespace AbstractFactoryPattern {
  export interface AbstractProductA {
    show(param?: any) :void;
  }

  export interface AbstractProductB {
    show(param?: any) :void;
  }

  export class ConcreteProductA1 implements AbstractProductA {
    show = (param?: any) : void => {
      console.log("[Abstract Factory] Concrete product A1 showing...");
    }
  }

  export class ConcreteProductB1 implements AbstractProductB {
    show = (param?: any) : void => {
      console.log("[Abstract Factory] Concrete product B1 showing...");
    }
  }

  export class ConcreteProductA2 implements AbstractProductA {
    show = (param?: any) : void => {
      console.log("[Abstract Factory] Concrete product A2 showing...");
    }
  }

  export class ConcreteProductB2 implements AbstractProductB {
    show = (param?: any) : void => {
      console.log("[Abstract Factory] Concrete product B2 showing...");
    }
  }

  export interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
  }

  export class ConcreteFactory1 implements AbstractFactory {
    createProductA() : AbstractProductA {
      return new ConcreteProductA1();
    }
    createProductB() : AbstractProductB {
      return new ConcreteProductB1();
    }
  }

  export class ConcreteFactory2 implements AbstractFactory {
    createProductA() : AbstractProductA {
      return new ConcreteProductA2();
    }
    createProductB() : AbstractProductB {
      return new ConcreteProductB2();
    }
  }
}
