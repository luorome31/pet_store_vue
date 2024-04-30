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
import { onBeforeMount, ref } from 'vue';
import axios from "axios";

let productList = ref(null)

onBeforeMount(() => {
    axios.get("http://localhost:3001/product_list").then(res => {
        productList.value = res.data.data.products;
        console.log(productList.value);
    });
});
</script>

<style lang="scss" scoped></style>