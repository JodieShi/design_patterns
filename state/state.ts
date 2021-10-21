namespace StatePattern {
  export class Context {
    private state: State;

    constructor() {
      this.state = new ConcreteStateA();
    }

    public setState(state: State) : void {
      this.state = state;
    }

    public getState() : State {
      return this.state;
    }

    Handle() : void {
      this.state.Handle(this);
    };
  }

  export interface State {
    Handle(context: Context) : void;
  }

  export class ConcreteStateA implements State {
    Handle(context: Context) : void {
      console.log("[State Pattern] concrete state A.");
      context.setState(new ConcreteStateB());
    }
  }

  export class ConcreteStateB implements State {
    Handle(context: Context) : void {
      console.log("[State Pattern] concrete state B.");
      context.setState(new ConcreteStateA());
    }
  }
}
