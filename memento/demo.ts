/// <reference path="./memento.ts" />

namespace MementoPattern {
  export namespace Demo {
    export function show() : void {
      const or : MementoPattern.Originator = new MementoPattern.Originator();
      const cr : MementoPattern.Caretaker = new MementoPattern.Caretaker();

      or.setState("s0");
      console.log(`[Memento Pattern] Initial State: ${or.getState()}`);
      cr.setMemento(or.createMemento());   // 保存快照
      or.setState("s1");
      console.log(`[Memento Pattern] New State: ${or.getState()}`);
      or.restoreMemento(cr.getMemento());  // 重置为快照处状态
      or.getState();
      console.log(`[Memento Pattern] Restored State: ${or.getState()}`);
    }
  }
}
