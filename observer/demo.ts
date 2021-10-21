/// <reference path="./observer.ts" />

namespace ObserverPattern {
  export namespace Demo {
    export function show() : void {
      const subject : ObserverPattern.Subject = new ObserverPattern.ConcreteSubject();
      const observer1 : ObserverPattern.Observer = new ObserverPattern.ConcreteObserver1();
      const observer2 : ObserverPattern.Observer = new ObserverPattern.ConcreteObserver2();

      subject.add(observer1);
      subject.add(observer2);
      subject.notifyObserver();

      subject.remove(observer2);
      subject.notifyObserver();
    }
  }
}