<template>
    <div class="container">
        <Navbar />
        <ListTable>
            <template v-slot:caption>
                <slot name="category"></slot>
            </template>
            <template v-slot:thead>
                <tr>
                    <th>Product Id</th>
                    <th>Name</th>
                </tr>
            </template>
            <template v-slot:tbody>
                <tr v-for="product in productList" :key="product.product_id">
                    <td>
                        <router-link :to="`/items/${product.product_id}`">{{ product.product_id }}</router-link>
                    </td>
                    <td>{{ product.name }}</td>
                </tr>
            </template>
        </ListTable>

    </div>
</template>

<script setup>
import Navbar from "@/component/Navbar.vue";
import ListTable from "@/component/ListTable.vue";
import { ref } from 'vue';

const productList = ref([
    {
        product_id: "FI-SW-01",
        name: "Koi",
    },
    {
        product_id: "FI-FW-02",
        name: "Goldfish",
    }
]);

</script>

<style lang="scss" scoped></style>