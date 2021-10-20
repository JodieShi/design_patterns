/// <reference path="./strategy.ts" />

namespace StrategyPattern {
  export namespace Demo {
    export function show() : void {
      const context : StrategyPattern.Context = new StrategyPattern.Context();
      const sa : StrategyPattern.Strategy = new StrategyPattern.ConcreteStrategyA();

      context.setStrategy(sa);
      context.strategyMethod();

      const sb : StrategyPattern.Strategy = new StrategyPattern.ConcreteStrategyB();
      context.setStrategy(sb);
      context.strategyMethod();
    }
  }
}
