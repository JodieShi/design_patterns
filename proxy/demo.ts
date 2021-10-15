/// <reference path="./proxy.ts" />

namespace ProxyPattern {
  export namespace Demo {
    export function show() : void {
      const proxy : ProxyPattern.Proxy = new ProxyPattern.Proxy();

      proxy.Request();
    }
  }
}
