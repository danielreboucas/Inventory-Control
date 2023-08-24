import { createStore } from "vuex";
import axios from "axios";

// Create a new store instance.
export default createStore({
  state: {
    products: [],
    product: {},
  },
  actions: {
    async loadProducts({ commit }) {
      axios.get("http://localhost:8080/api/v1/products").then((response) => {
        commit("loadProducts", response.data);
      });
    },
    async addProduct({ commit }, payload) {
      axios
        .post(
          "http://localhost:8080/api/v1/products",
          JSON.stringify(payload),
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .catch((error) => {
          console.log(error.response.data.error);
        });
      commit("addProduct", payload);
    },
    async editProduct({ commit }, payload) {
      axios.put(
        `http://localhost:8080/api/v1/products/${payload.id}`,
        JSON.stringify(payload),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    },
    async deleteProduct({ commit }, productId) {
      axios
        .patch(`http://localhost:8080/api/v1/products/${productId}/inactive`)
        .then(() => {
          axios.delete(`http://localhost:8080/api/v1/products/${productId}`);
          commit("deleteProduct", productId);
        });
    },
    async loadProductById({ commit }, productId) {
      axios
        .get(`http://localhost:8080/api/v1/products/${productId}`)
        .then((response) => {
          commit("loadProductById", response.data);
        });
    },
  },
  mutations: {
    loadProducts(state, payload) {
      state.products = payload;
    },
    addProduct(state, payload) {
      state.products.data.push(payload);
    },
    editProduct(state, product) {},
    deleteProduct(state, productId) {
      const updatedProducts = state.products.data.filter(
        (p) => productId != p.id
      );
      state.products.data = updatedProducts;
    },
    loadProductById(state, payload) {
      state.product = payload.data;
    },
  },
});
