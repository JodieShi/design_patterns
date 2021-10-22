namespace VisitorPattern {
  export interface Element {
    accept(visitor: Visitor) : void;
  }

  export class ConcreteElementA implements Element {
    public accept(visitor: Visitor) : void {
      console.log("[Visitor Pattern] Concrete element A accept");
      visitor.visitA(this);
    }

    public operationA(params?: any) : void {
      console.log("[Visitor Pattern] Concrete element A operate.");
    }
  }

  export class ConcreteElementB implements Element {
    public accept(visitor: Visitor) : void {
      console.log("[Visitor Pattern] Concrete element B accept");
      visitor.visitB(this);
    }

    public operationB(params?: any) : void {
      console.log("[Visitor Pattern] Concrete element B operate.");
    }
  }

  export interface Visitor {
    visitA(element: ConcreteElementA) : void;
    visitB(element: ConcreteElementB) : void;
  }

  export class ConcreteVisitorA implements Visitor {
    public visitA(element: ConcreteElementA) : void {
      console.log("[Visitor Pattern] Concrete visitor A visit element A");
      element.operationA();
    }

    public visitB(element: ConcreteElementB) : void {
      console.log("[Visitor Pattern] Concrete visitor A visit element B");
      element.operationB();
    }
  }

  export class ConcreteVisitorB implements Visitor {
    public visitA(element: ConcreteElementA) : void {
      console.log("[Visitor Pattern] Concrete visitor B visit element A");
      element.operationA();
    }

    public visitB(element: ConcreteElementB) : void {
      console.log("[Visitor Pattern] Concrete visitor B visit element B");
      element.operationB();
    }
  }

  export class ObjectStructure {
    private list: Element[];

    constructor() {
      this.list = [];
    }

    public add(element: Element) : void {
      this.list.push(element);
    }

    public remove(element: Element) : void {
      const index = this.list.indexOf(element);
      this.list.splice(index, 1);
    }

    public accept(visitor: Visitor) : void {
      this.list.forEach(ele => {
        ele.accept(visitor);
      })
    }
  }
}
