<template>
    <div class="container">
        <Navbar />
        <ListTable>
            <template v-slot:caption>
                <slot name="product"></slot>
            </template>
            <template v-slot:thead>
                <tr>
                    <th>Image</th>
                    <th>Item Id</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </template>
            <template v-slot:tbody>
                <tr v-for="(item, index) in itemList" :key="item.item_id">
                    <td class = "image_td">
                        <img :src="'/src/assets/' + `${item?.image}`" alt="item.item_id"
                            class="rounded-start item_image">
                    </td>
                    <td class="align-middle">
                        <router-link :to="`/item_info/${item.item_id}`">{{ item.item_id }}</router-link>
                    </td>
                    <td class="align-middle">{{ item.price }}</td>
                    <td class="align-middle">{{ item.stock }}</td>
                </tr>
            </template>
        </ListTable>
    </div>
</template>

<script setup>
import Navbar from "@/component/Navbar.vue";
import ListTable from "@/component/ListTable.vue";
import { computed, onBeforeMount, ref } from 'vue';

import axios from "axios";
let itemList = ref(null);
let image_url = computed((index) => {
    console.log(index);
    return "1"
    //return "/src/assets/"+ itemList.value[index].image;
})
onBeforeMount(() => {
    axios.get("http://localhost:3001/products_basic")
        .then(response => {
            itemList.value = response.data.data;
            console.log(itemList.value[0].image);
            console.log(response.data.data);

        })
        .catch(error => {
            console.log(error);
        })
})
</script>

<style scoped>
.item_image {
    max-width: 300px;
    max-height: 200px;
}
.image_td {
    width: 300px;
}
</style>