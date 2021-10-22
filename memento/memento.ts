namespace MementoPattern {
  export class Originator {
    private state: string;

    public setState(state: string) : void {
      this.state = state;
    }

    public getState() : string {
      return this.state;
    }

    public createMemento() : Memento {
      return new Memento(this.state);
    }

    public restoreMemento(m: Memento) : void {
      this.setState(m.getState());
    }
  }

  export class Memento {
    private state: string;

    constructor(state: string) {
      this.state = state;
    }

    public setState(state: string) : void {
      this.state = state
    }

    public getState() : string {
      return this.state;
    }
  }

  export class Caretaker {
    private memento: Memento;

    public setMemento(m: Memento) : void {
      this.memento = m;
    }

    public getMemento() : Memento {
      return this.memento;
    }
  }
}