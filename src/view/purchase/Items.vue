<template>
    <div class="container">
        <Navbar/>
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
                    <td>
                        <img :src="item.image" alt="item.item_id" class="img-fluid">
                    </td>
                    <td>
                        <router-link :to="`/item_info/${item.item_id}`">{{ item.item_id }}</router-link>
                    </td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.stock }}</td>
                </tr>
            </template>
        </ListTable>
    </div>
</template>

<script setup>
    import Navbar from "@/component/Navbar.vue";
    import ListTable from "@/component/ListTable.vue";
    import { ref } from 'vue';
    import img1 from "@/assets/image1.jpeg";
    import img2 from "@/assets/image2.jpeg";
    let itemList = ref([
    {
        "item_id": "EST-1",
    	"price": 199.99,
    	"stock": 50,
        "image": img1
      },
      {
        "item_id": "EST-1",
    	"price": 199.99,
    	"stock": 50,
        "image": img2
      },
    ])
</script>

<style lang="scss" scoped>

</style>