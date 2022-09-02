import { Item } from '../models/item';
import { HttpService } from '../services/httpService';
import { ItemHelper } from '../helpers/itemHelper';

class ItemController {
  getItem(list, url) {
    (function loop(index, length) {
      if (index >= length) {
        return;
      }

      new HttpService()
        .get(url + list[index])
        .then((item_data) => {
          let item_json = JSON.parse(item_data);

          let item = new Item(
            item_json.id,
            item_json.name.split('-').join(' '),
            item_json.cost,
            item_json.sprites.default
          );

          item.viewIndex();

          loop(index + 1, length);
        })
        .catch((err) => console.error(err));
    })(0, list.length);
  }
}

let itemController = new ItemController();
export function itemCurrentInstance() {
  return itemController;
}
