namespace StrategyPattern {
  export interface Strategy {
    strategyMethod(params?: any) : void;
  }

  export class ConcreteStrategyA implements Strategy {
    strategyMethod(params?: any) : void {
      console.log("[Strategy Pattern] Strategy method from concrete strategy A.");
    }
  }

  export class ConcreteStrategyB implements Strategy {
    strategyMethod(params?: any) : void {
      console.log("[Strategy Pattern] Strategy method from concrete strategy B.");
    }
  }

  export class Context {
    private strategy: Strategy;

    setStrategy(strategy: Strategy) {
      this.strategy = strategy;
    }

    getStrategy() : Strategy {
      return this.strategy;
    }

    strategyMethod(params?: any) {
      this.strategy.strategyMethod(params);
    }
  }
}
