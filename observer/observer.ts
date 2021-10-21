namespace ObserverPattern {
  export interface Observer {
    response() : void;
  }

  export class ConcreteObserver1 implements Observer {
    response() : void {
      console.log("[Observer Pattern] Response from concrete observer 1.");
    }
  }

  export class ConcreteObserver2 implements Observer {
    response() : void {
      console.log("[Observer Pattern] Response from concrete observer 2.");
    }
  }

  export class Subject {
    protected observers: Observer[];

    constructor() {
      this.observers = []
    }

    public add(observer: Observer) : void {
      this.observers.push(observer)
    }

    public remove(observer: Observer) : void {
      let index = this.observers.indexOf(observer);
      this.observers.splice(index, 1);
    }

    public notifyObserver() : void {}
  }

  export class ConcreteSubject extends Subject {
    public notifyObserver() : void {
      console.log('[Observer Pattern] Concrete subject.');
      for (let observer of this.observers) {
        console.log('[Observer Pattern] Notify observer.');
        observer.response()
      }
    }
  }
}
