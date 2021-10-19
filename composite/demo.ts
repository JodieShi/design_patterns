/// <reference path="./composite.ts" />

namespace CompositePattern {
  export namespace Demo {
    export function show() : void {
      const com1 : CompositePattern.Composite = new CompositePattern.Composite();
      const com2 : CompositePattern.Composite = new CompositePattern.Composite();
      const leaf1 : CompositePattern.Component = new CompositePattern.Leaf('a');
      const leaf2 : CompositePattern.Component = new CompositePattern.Leaf('b');
      const leaf3 : CompositePattern.Component = new CompositePattern.Leaf('c');

      com1.add(leaf1);
      com1.add(leaf2);
      com1.add(leaf3);
      com1.remove(1);
      com1.add(com2);
      com2.add(leaf2),
      com2.add(leaf3);
      com1.operation();
    }
  }
}
