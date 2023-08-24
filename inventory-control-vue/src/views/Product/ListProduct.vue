<template>
  <div class="list-products-container">
    <router-link to="/product/add">
      <Button>Add new product</Button>
    </router-link>
    <DataView :value="products.data">
      <template #list="slotProps">
        <div class="col-12">
          <div
            class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"
          >
            <div
              class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"
            >
              <div
                class="flex flex-column align-items-center sm:align-items-start gap-3"
              >
                <div class="text-2xl font-semibold">
                  {{ slotProps.data.name }}
                </div>
                <div>
                  {{ slotProps.data.description }}
                </div>
              </div>
              <div
                class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"
              >
                <span class="text-2xl font-semibold" aria-label="Price"
                  >R${{ slotProps.data.price }}</span
                >
                <div class="buttons-container">
                  <router-link :to="`product/edit/${slotProps.data.id}`">
                    {{ console.log(slotProps.data.id) }}
                    <Button
                      icon="pi pi-pencil"
                      rounded
                      label="Edit"
                      severity="secondary"
                    ></Button>
                  </router-link>
                  <Button
                    icon="pi pi-trash"
                    rounded
                    label="Delete"
                    severity="danger"
                    @click.prevent="requestDeleteProduct(slotProps.data.id)"
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script>
import Button from "primevue/button";
import DataView from "primevue/dataview";

export default {
  components: { Button, DataView },
  created() {
    this.$store.dispatch("loadProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    async requestDeleteProduct(productId) {
      this.$store.dispatch("deleteProduct", productId);
    },
  },
};
</script>
