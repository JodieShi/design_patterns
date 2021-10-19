namespace CompositePattern {
  export interface Component {
    operation() : void;
  }

  export class Composite implements Component {
    private children: Component[];

    constructor() {
      this.children = []
    }

    public add(c: Component) : void {
      this.children.push(c);
    }

    public remove(i: number) : void {
      this.children.splice(i, 1);
    }

    public getChild(i: number) : Component {
      return this.children[i]
    }

    operation() : void {
      for (let c of this.children) {
        c.operation()
      }
    }
  }

  export class Leaf implements Component {
    private s : string;

    constructor(s: string) {
      this.s = s;
    }

    operation() : void {
      console.log(`[Composite Pattern] Leaf ${this.s} operating....`);
    }
  }
}
