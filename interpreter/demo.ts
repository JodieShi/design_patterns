/// <reference path="./interpreter.ts" />

namespace InterpreterPattern {
  export namespace Demo {
    export function show() : void {
      const context: InterpreterPattern.Context = new InterpreterPattern.Context();
      context.operation('test');
    }
  }
}