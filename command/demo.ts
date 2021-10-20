/// <reference path="./command.ts" />

namespace CommandPattern {
  export namespace Demo {
    export function show() : void {
      const commandA : CommandPattern.Command = new CommandPattern.ConcreteCommandA();
      const commandB : CommandPattern.Command = new CommandPattern.ConcreteCommandB();
      const invoker : CommandPattern.Invoker = new CommandPattern.Invoker(commandA);

      invoker.call();
      invoker.setCommand(commandB);
      invoker.call();
    }
  }
}
