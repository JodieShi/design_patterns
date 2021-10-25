namespace InterpreterPattern {
  export interface AbstractExpression {
    interpret(info: string) : void;
  }

  export class TerminalExpression implements AbstractExpression {
    interpret(info: string) : void {
      console.log(`[Interpreter Pattern] Terminal expression: ${info}.`);
    };
  }

  export class NonTerminalExpression implements AbstractExpression {
    private exp1: AbstractExpression;
    private exp2: AbstractExpression;

    constructor(exp1: AbstractExpression, exp2: AbstractExpression) {
      this.exp1 = exp1;
      this.exp2 = exp2;
    }

    interpret(info: string) : void {
      console.log(`[Interpreter Pattern] Non-terminal expression: ${info}-1 and ${info}-2.`);
      this.exp1.interpret(info + '-1');
      this.exp2.interpret(info + '-2');
    }
  }

  export class Context {
    private exp: AbstractExpression;

    constructor() {
      const exp1: AbstractExpression = new TerminalExpression();
      const exp2: AbstractExpression = new TerminalExpression();
      this.exp = new NonTerminalExpression(exp1, exp2)
    }

    operation(info: string) : void {
      console.log(`[Interpreter Pattern] Context operation: ${info}.`);
      this.exp.interpret(info)
    }
  }
}