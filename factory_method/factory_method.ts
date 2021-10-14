namespace FactoryMethodPattern {
  export interface AbstractProduct {
    show(param?: any) : void;
  }

  export class ConcreteProductA implements AbstractProduct {
    show = (param?: any) : void => {
      console.log("[Factory Method] Concrete product A showing...");
    }
  }

  export class ConcreteProductB implements AbstractProduct {
    show = (param?: any) : void => {
      console.log("[Factory Method] Concrete product B showing...");
    }
  }

  export interface AbstractFactory {
    createProduct() : AbstractProduct;
  }

  export class ConcreteFactoryA implements AbstractFactory {
    createProduct() : AbstractProduct {
      return new ConcreteProductA();
    }
  }

  export class ConcreteFactoryB implements AbstractFactory {
    createProduct() : AbstractProduct {
      return new ConcreteProductB();
    }
  }
}