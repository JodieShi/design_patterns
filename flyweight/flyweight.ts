namespace FlyweightPattern {
  export class UnsharedConcreteFlyweight {
    private info: string;

    constructor(info: string) {
      this.info = info;
    }

    public getInfo() : string {
      return this.info;
    }
  }

  export interface Flyweight {
    operation(state: UnsharedConcreteFlyweight): void;
  }

  export class ConcreteFlyweight implements Flyweight {
    private key: string;

    constructor(key: string) {
      this.key = key;
    }

    operation(outState: UnsharedConcreteFlyweight) : void {
      console.log(`[Flyweight Pattern] Concrete flyweight: ${this.key}.`);
      console.log(`[Flyweight Pattern] Unshared concrete flyweight info: ${outState.getInfo()}`);
    }
  }

  /*   export class ConcreteFlyweight2 implements Flyweight {
    private key: string;

    constructor(key: string) {
      this.key = key;
    }

    operation(outState: UnsharedConcreteFlyweight) : void {
      console.log(`[Flyweight Pattern] Concrete flyweight: ${this.key}.`);
      console.log(`[Flyweight Pattern] Unshared concrete flyweight info: ${outState.getInfo()}`);
    }
  } */

  export class FlyweightFactory {
    private flyweights: {[s: string]: Flyweight} = <any>{};

    public getFlyweight(key: string) : Flyweight {
      if (this.flyweights[key] === undefined || this.flyweights[key] === null) {
        this.flyweights[key] = new ConcreteFlyweight(key)
      }
      return this.flyweights[key]
    }
  }
}