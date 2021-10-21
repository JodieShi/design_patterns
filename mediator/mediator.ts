namespace MediatorPattern {
  export class Colleague {
    protected mediator: Mediator;

    setMedium(mediator: Mediator) : void {
      this.mediator = mediator;
    }

    receive() : void {}
    send() : void {}
  }

  export class ConcreteColleague1 extends Colleague {
    receive() : void {
      console.log("[Mediator Pattern] Concrete colleague 1 received the request.");
    }

    send() : void {
      console.log("[Mediator Pattern] Concrete colleague 1 send the request.");
      this.mediator.relay(this)
    }
  }

  export class ConcreteColleague2 extends Colleague {
    receive() : void {
      console.log("[Mediator Pattern] Concrete colleague 2 received the request.");
    }

    send() : void {
      console.log("[Mediator Pattern] Concrete colleague 2 send the request.");
      this.mediator.relay(this)
    }
  }

  export interface Mediator {
    register(colleague: Colleague) : void;
    relay(cl: Colleague) : void;
  }

  export class ConcreteMediator implements Mediator {
    private colleagues: Colleague[];

    constructor() {
      this.colleagues = []
    }

    register(colleague: Colleague) {
      if (this.colleagues.indexOf(colleague) === -1) {
        this.colleagues.push(colleague);
        colleague.setMedium(this);
      }
    }

    relay(cl: Colleague) {
      for (let colleague of this.colleagues) {
        if (cl !== colleague) {
          colleague.receive()
        }
      }
    }
  }
}
