namespace ProxyPattern {
  interface Subject {
    Request() : void;
  }

  class RealSubject implements Subject {
    Request() : void {
      console.log("[Proxy Pattern] Real subject requesting...");
    }
  }

  export class Proxy {
    private realSubject: RealSubject;

    constructor() {
      // this.realSubject = new RealSubject()
    }

    private preRequest() : void {
      console.log("[Proxy Pattern] Pre request.");
    }

    private postRequest() : void {
      console.log("[Proxy Pattern] Post request.");
    }

    public Request() : void {
      if (this.realSubject === null || this.realSubject === undefined) {
        this.realSubject = new RealSubject()
      }
      this.preRequest()
      this.realSubject.Request()
      this.postRequest()
    }
  }
}