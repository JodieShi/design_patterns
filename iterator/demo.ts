/// <reference path="./iterator.ts" />

namespace IteratorPattern {
  export namespace Demo {
    export function show() : void {
      const ag: IteratorPattern.Aggregate = new IteratorPattern.ConcreteAggregator();
      ag.add('item 1');
      ag.add('item 2');
      ag.add('item 3');
      const it = ag.getIterator();

      while (it.hasNext()) {
        let item: any = it.next();
        console.log(`[Iterator Pattern] ${item.toString()}`);
      }

      let item = it.first();
      console.log(`[Iterator Pattern] First item: ${item.toString()}`);
    }
  }
}
