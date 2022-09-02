import { ItemView } from '../views/itemView';
export class Item {
  constructor(id, name, cost, sprite) {
    this._id = id;
    this._name = name;
    this._cost = cost;
    this._sprite = sprite;
  }

  viewIndex() {
    let model = {
      src: this._sprite,
      cost: this._cost,
      name: this._name,
    };

    let div = document.querySelector('#itensView');

    div.innerHTML
      ? (div.innerHTML += ItemView.templateIndex(model))
      : (div.innerHTML = ItemView.templateIndex(model));
  }
}
