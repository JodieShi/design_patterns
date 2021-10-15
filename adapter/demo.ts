/// <reference path="./adapter.ts" />

namespace ClassAdapterPattern {
  export namespace Demo {
    export function show() {
      const adapter : ClassAdapterPattern.Target = new ClassAdapterPattern.ClassAdapter();

      adapter.request();
    }
  }
}

namespace ObjectAdapterPattern {
  export namespace Demo {
    export function show() {
      const adaptee : ObjectAdapterPattern.Adaptee = new ObjectAdapterPattern.Adaptee();
      const adapter : ObjectAdapterPattern.Target = new ObjectAdapterPattern.ObjectAdapter(adaptee);

      adapter.request();
    }
  }
}
