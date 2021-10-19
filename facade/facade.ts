namespace FacadePattern {
  // TODO@jodie: add abstract facade

  class SubSystem01 {
    public method1(params?: any) : void {
      console.log("[Facade Pattern] Method1 from sub system01.");
    }
  }

  class SubSystem02 {
    public method2(params?: any) : void {
      console.log("[Facade Pattern] Method2 from sub system02.");
    }
  }

  class SubSystem03 {
    public method3(params?: any) : void {
      console.log("[Facade Pattern] Method3 from sub system03.");
    }
  }

  export class Facade {
    private sys1: SubSystem01 = new SubSystem01();
    private sys2: SubSystem02 = new SubSystem02();
    private sys3: SubSystem03 = new SubSystem03();

    /**
     * method
     */
    public method(params?: any) : void {
      console.log("[Facade Pattern] Facade method called.");
      this.sys1.method1();
      this.sys2.method2();
      this.sys3.method3();
    }
  }
}
