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
                <tr v-for="item in itemList" :key="item.item_id">
                    <td style="width: 200px;">
                        <img :src="item.image" alt="item.item_id" style="max-width: 200px;">
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
import { ref } from 'vue';
import img1 from "@/assets/pexels-cat-1.jpeg";
import img2 from "@/assets/pexels-cat-2.jpeg";
import img3 from "@/assets/pexels-cat-3.jpeg";


let itemList = ref([
    {
        "item_id": "EST-17",
        "price": 94.00,
        "stock": 50,
        "image": img1
    },
    {
        "item_id": "EST-16",
        "price": 94.00,
        "stock": 100,
        "image":img2
    },
    {
        "item_id": "EST-15",
        "price": 24.00,
        "stock": 40,
        "image": img3
    }
])
</script>

<style lang="scss" scoped>
.table-custom {
    width: auto;
    /* 自动调整宽度 */
    display: inline-block;
    /* 行内块元素，使宽度与内容匹配 */
}
</style>