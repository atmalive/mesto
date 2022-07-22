export default class Section {
  constructor({ renderer }, elementsContainer) {
    this._render = renderer;
    this._container = elementsContainer;
  }

  addItem(element, isResultRenderer = false) {
    if (isResultRenderer) {
      this._container.append(element);
    } else {
      this._container.prepend(element);
    }
  }

  renderItems(cardsArray) {
    cardsArray.forEach((item) => {
      const resultRender = this._render(item);
      const isResultRenderer = true;

      this.addItem(resultRender, isResultRenderer);
    });
  }
}
