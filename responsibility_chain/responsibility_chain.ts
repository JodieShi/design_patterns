namespace ResponsibilityChainPattern {
  export class Handler {
    private next: Handler;

    public setNext(next: Handler) : void {
      this.next = next;
    }

    public getNext() : Handler {
      return this.next;
    }

    public handleRequest(request: string) : void {}
  }

  export class ConcreteHandler1 extends Handler {
    public handleRequest(request: string) : void {
      if (request === 'one') {
        console.log(`[Responsibility Chain Pattern] Concrete handler 1 is handling request ${request}`);
      } else {
        if (this.getNext() !== null) {
          this.getNext().handleRequest(request);
        } else {
          console.log(`[Responsibility Chain Pattern] Unhandled request ${request}.`);
        }
      }
    }
  }

  export class ConcreteHandler2 extends Handler {
    public handleRequest(request: string) : void {
      if (request === 'two') {
        console.log(`[Responsibility Chain Pattern] Concrete handler 2 is handling request ${request}`);
      } else {
        if (this.getNext() !== null) {
          this.getNext().handleRequest(request);
        } else {
          console.log(`[Responsibility Chain Pattern] Unhandled request ${request}.`);
        }
      }

    }
  }
}