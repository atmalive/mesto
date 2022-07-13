export default class Section {
  constructor({ items, renderer }, elementsContainer) {
    this._items = items;
    this._render = renderer;
    this._container = elementsContainer;
  }

  addItem(element, isResultRenderer=false) {
    if (isResultRenderer) {
      this._container.append(element);
    } else {
      this._container.prepend(element);
    }
  }

  renderItems() {
    this._items.forEach((item) => {
      const resultRender = this._render(item.name, item.link);
      const isResultRenderer = true;

      this.addItem(resultRender, isResultRenderer);
    });
  }
}
