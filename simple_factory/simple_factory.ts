namespace SimpleFactoryPattern {
  export interface AbstractProduct {
    show(param?: any) : void;
  }

  export class ConcreteProductA implements AbstractProduct {
    show = (params?: any) : void => {
      console.log("[Simple Factory] Concrete product A showing...");
    }
  }

  export class ConcreteProductB implements AbstractProduct {
    show = (params?: any) : void => {
      console.log("[Simple Factory] Concrete product B showing...");
    }
  }

  export namespace SimpleFactory {
    export function createProduct(type: string) : AbstractProduct {
      if (type === 'A') {
        return new ConcreteProductA();
      } else if (type === 'B') {
        return new ConcreteProductB();
      }

      return null;
    }
  }
}