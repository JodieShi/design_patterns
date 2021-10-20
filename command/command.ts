namespace CommandPattern {
  export class ReceiverA {
    public action(params?: any) : void {
      console.log("[Command Pattern] Action from receiver A.");
    }
  }

  export class ReceiverB {
    public action(params?: any) : void {
      console.log("[Command Pattern] Action from receiver B.");
    }
  }

  export interface Command {
    execute(params?: any) : void;
  }

  export class ConcreteCommandA implements Command {
    private receiver: ReceiverA;

    constructor() {
      this.receiver = new ReceiverA();
    }

    execute(params?: any) : void {
      console.log("[Command Pattern] Concrete command A exec.");
      this.receiver.action(params);
    }
  }

  export class ConcreteCommandB implements Command {
    private receiver: ReceiverB;

    constructor() {
      this.receiver = new ReceiverB();
    }

    execute(params?: any) : void {
      console.log("[Command Pattern] Concrete command B exec.");
      this.receiver.action(params);
    }
  }

  export class Invoker {
    private command: Command;

    constructor(command: Command) {
      this.command = command;
    }

    public setCommand(command: Command) {
      this.command = command;
    }

    public call(params?: any) : void {
      console.log("[Command Pattern] Invoker call.");
      this.command.execute(params);
    }
  }
}
