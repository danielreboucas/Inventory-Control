<template>
  <div class="add-product-container">
    <InputText
      v-model="product.name"
      aria-describedby="name-help"
      placeholder="Name"
    />
    <InputText
      v-model="product.price"
      aria-describedby="price-help"
      placeholder="Price"
    />
    <Textarea
      v-model="product.description"
      aria-describedby="description-help"
      placeholder="Description"
    />
    <div class="buttons-container">
      <router-link to="/product">
        <Button @click.prevent="requestAddProduct">Save product</Button>
      </router-link>
      <router-link to="/product">
        <Button severity="secondary">Cancel</Button>
      </router-link>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import router from "@/router";

export default {
  name: "AddProduct",
  components: { InputText, Button, Textarea },
  data() {
    return {
      product: {
        name: "",
        price: "",
        description: "",
      },
    };
  },
  methods: {
    async requestAddProduct() {
      this.product.price = parseFloat(this.product.price);
      this.$store.dispatch("addProduct", this.product);
      router.push("/product");
    },
  },
};
</script>
