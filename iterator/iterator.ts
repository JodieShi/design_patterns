namespace IteratorPattern {
  export interface Iterator {
    first() : any;
    next(): any;
    hasNext(): boolean;
  }

  export class ConcreteIterator implements Iterator {
    private index: number = -1;
    private list: any[];

    constructor(list: any[]) {
      this.list = list;
    }

    first() {
      this.index = 0;
      return this.list[this.index];
    }

    hasNext() {
      return !!(this.index < this.list.length - 1);
    }

    next() {
      let obj = null;

      if (this.hasNext()) {
        obj = this.list[++this.index];
      }

      return obj;
    }
  }

  export interface Aggregate {
    add(obj: any) : void;
    remove(obj: any) : void;
    getIterator() : Iterator;
  }

  export class ConcreteAggregator implements Aggregate {
    private list: any[];

    constructor() {
      this.list = []
    }

    add(obj: any) {
      this.list.push(obj);
    }

    remove(obj: any) {
      const index = this.list.indexOf(obj);
      this.list.splice(index, 1);
    }

    getIterator() : Iterator {
      return new ConcreteIterator(this.list);
    }
  }
}
