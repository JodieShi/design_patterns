namespace BuilderPattern {
  export class Product {
    private partA: string;
    private partB: string;
    private partC: string;

    public setPartA(partA: string) : void {
      this.partA = partA
    }

    public setPartB(partB: string) : void {
      this.partB = partB
    }

    public setPartC(partC: string) : void {
      this.partC = partC
    }

    public show(params?: any) : void {
      console.log(`[Builder Pattern] Product info: ${this.partA}, ${this.partB}, ${this.partC}.`);
    }
  }


  export interface Builder {
    buildPartA() : void;
    buildPartB() : void;
    buildPartC() : void;
    getProduct() : Product;
  }

  export class ConcreteBuilder implements Builder {
    protected product: Product;

    constructor() {
      this.reset();
    }

    reset() {
      this.product = new Product();
    }

    buildPartA() : void {
      this.product.setPartA("partA");
    }

    buildPartB() : void {
      this.product.setPartB("partB");
    }

    buildPartC() : void {
      this.product.setPartC("partC");
    }

    getProduct() : Product {
      const p = this.product;
      this.reset();
      return p;
    }
  }

  export class Director {
    private builder : Builder;

    constructor(builder) {
      this.builder = builder;
    }

    public buildProduct() : Product {
      this.builder.buildPartA();
      this.builder.buildPartB();
      this.builder.buildPartC();
      return this.builder.getProduct();
    }
  }
}
