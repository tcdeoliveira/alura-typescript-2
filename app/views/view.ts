export class View<T>{
    protected element: HTMLElement
    constructor(seletor: string) {

    }
    update(model: T): void {
      const template = this.template(model);
      this.element.innerHTML = template;
    }

    template(model: T): string {
      throw Error("template must be implemented");
    }
}