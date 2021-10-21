/// <reference path="./state.ts" />

namespace StatePattern {
  export namespace Demo {
    export function show() : void {
      const context : StatePattern.Context = new StatePattern.Context();
      context.Handle();
      context.Handle();
      context.Handle();
      context.Handle();
    }
  }
}
