import { defineStore } from "pinia";
import { groupBy, orderBy } from "lodash";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [],
    };
  },
  getters: {
    count: (state) => state.items.length,
    isEmpty: (state) => state.count === 0,
    grouped: (state) => {
      const orderedItems = orderBy(state.items, (item) => item.name, "asc");
      return groupBy(orderedItems, (item) => item.name);
    },
    groupCount: (state) => (name) => state.grouped[name].length,
    //El getter "totalPrice" recorre todos los productos que hay en el array "items" del store y suma los precios de todos los elementos
    totalPrice: (state) => state.items.reduce((acc, b) => acc + b?.price, 0),
  },
  actions: {
    addItems(count, item) {
      count = parseInt(count);
      for (let index = 0; index < count; index++) {
        this.items.push({ ...item });
      }
    },
    clearItem(name) {
      this.items = this.items.filter((item) => item.name != name);
    },
    setItemCount(item, count) {
      this.clearItem(item.name);
      this.addItems(count, item);
    },
  },
});
