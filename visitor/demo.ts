/// <reference path="./visitor.ts" />

namespace VisitorPattern {
  export namespace Demo {
    export function show() : void {
      const os: VisitorPattern.ObjectStructure = new VisitorPattern.ObjectStructure();
      const eleA: VisitorPattern.Element = new VisitorPattern.ConcreteElementA();
      const eleB: VisitorPattern.Element = new VisitorPattern.ConcreteElementB();
      os.add(eleA);
      os.add(eleB);

      const visitorA: VisitorPattern.Visitor = new VisitorPattern.ConcreteVisitorA();
      const visitorB: VisitorPattern.Visitor = new VisitorPattern.ConcreteVisitorB();

      os.accept(visitorA);
      os.remove(eleA);
      os.accept(visitorB);
    }
  }
}
