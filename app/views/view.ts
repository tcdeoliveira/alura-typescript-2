export abstract class View<T>{
    protected element: HTMLElement
    constructor(seletor: string) {

    }
    update(model: T): void {
      const template = this.template(model);
      this.element.innerHTML = template;
    }

    abstract template(model: T): string 
}