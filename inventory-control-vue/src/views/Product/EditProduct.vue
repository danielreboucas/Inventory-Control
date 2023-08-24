<template>
  <div class="edit-product-container">
    {{ console.log("product", product) }}
    <InputText
      v-model="product.name"
      aria-describedby="name-help"
      placeholder="Name"
    ></InputText>
    <InputText
      v-model="product.price"
      aria-describedby="price-help"
      placeholder="Price"
    ></InputText>
    <Textarea
      v-model="product.description"
      aria-describedby="description-help"
      placeholder="Description"
    ></Textarea>
    <div class="buttons-container">
      <Button class="save-button" @click.prevent="requestEditProduct"
        >Confirm</Button
      >
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
  name: "EditProduct",
  components: { InputText, Button, Textarea },
  props: ["index"],
  created() {
    this.$store.dispatch("loadProductById", this.index);
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  methods: {
    async requestEditProduct() {
      this.$store.dispatch("editProduct", this.product.data);
      router.push("/product");
    },
  },
};
</script>
