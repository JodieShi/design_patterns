namespace InterpreterPattern {
  export interface AbstractExpression {
    interpret(info: string) : void;
  }

  export class TerminalExpression implements AbstractExpression {
    interpret(info: string) : void {
      console.log(`[Interpreter Pattern] Terminal expression ${info}.`);
    };
  }

  export class NonTerminalExpression implements AbstractExpression {
    private exp1: AbstractExpression;
    private exp2: AbstractExpression;

    interpret(info: string) : void {
      console.log(`[Interpreter Pattern] Non-terminal expression ${info}.`);
    }
  }

  export class Context {
    private exp: AbstractExpression;

    constructor() {
    }

    operation(info: string) : void {
      console.log(`[Interpreter Pattern] Context operation ${info}.`);
    }
  }
}