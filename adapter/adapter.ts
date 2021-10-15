namespace ClassAdapterPattern {
  export interface Target {
    request() : void;
  }

  class Adaptee {
    public specificRequest(): void {
      console.log("[Class Adapter Pattern] Calling specific request in adaptee.");
    }
  }

  export class ClassAdapter implements Target {
    request() : void {
      const adaptee = new Adaptee()
      adaptee.specificRequest();
    }
  }
}

namespace ObjectAdapterPattern {
  export interface Target {
    request() : void;
  }

  export class Adaptee {
    public specificRequest(): void {
      console.log("[Object Adapter Pattern] Calling specific request in adaptee.");
    }
  }

  export class ObjectAdapter implements Target {
    private adaptee: Adaptee;

    constructor(adaptee) {
      this.adaptee = adaptee;
    }

    request() : void {
      this.adaptee.specificRequest()
    }
  }
}
