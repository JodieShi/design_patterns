/// <reference path="./template_method.ts" />

namespace TemplateMethodPattern {
  export namespace Demo {
    export function show() : void {
      const template : TemplateMethodPattern.AbstractClass = new TemplateMethodPattern.ConcreteClass()
      template.TemplateMethod();
    }
  }
}
