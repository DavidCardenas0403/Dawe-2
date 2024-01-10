import { defineStore } from "pinia";

//nom i option object
export const useProductStore = defineStore("ProductStore", {
  //state
  state: () => {
    return {
      products: [],
      //es lo mismo que "products: products"
    };
  },
  actions: {
    async fill() {
      this.products = (await import("@/data/products.json")).default;
    },
  },
  //getters
  //actions
});
