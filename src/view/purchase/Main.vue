<template>
    <div class="container">
        <Navbar />
        <div class="row mt-4">
            <ItemCard v-for="item in item_main" :key="item.id">
                <template v-slot:img>
                    <img :src="'/src/assets/' + `${item?.image}`" alt="item.name" class="w-100 rounded">
                </template>

                <template v-slot:title>
                    <div class="border-top px-2 mx-2 "></div>
                    <h6 class="card-title mt-1"> <i class="bi bi-arrow-right"></i> {{ item.item_id }} <i
                            class="bi bi-arrow-left"></i></h6>
                </template>
                <template v-slot:price>
                    <p class="card-text"><i class="bi bi-tag"></i> <small class="text-muted">Price:$ {{ item.price
                            }}</small></p>
                    <router-link :to="`/cart`" class="link text-decoration-none m-2">
                        <i class="bi bi-bag-heart"></i> add it 
                    </router-link>
                    <router-link :to="`/item_info/${item.item_id}`" class="link text-decoration-none">
                        <i class="bi bi-ticket-detailed"></i> details
                    </router-link>
                </template>
            </ItemCard>
        </div>

    </div>
</template>

<script setup>
import Navbar from "../../component/Navbar.vue";
import ItemCard from "@/component/ItemCard.vue";
import axios from "axios";
import { onMounted } from "vue";
import { ref } from "vue";
//let data = await fetch("https://fakestoreapi.com/products").then(res => res.json());
let fakeData = [
    {
        id: 1,
        title: "Pet Food",
        price: 10.99,
        image: "https://tuapi.eees.cc/dongman/pc/TUAPI-EEES-CC--1564737439.jpg"
    },
    {
        id: 2,
        title: "Pet Toy",
        price: 5.99,
        image: "https://tuapi.eees.cc/dongman/pc/TUAPI-EEES-CC-2026950777.jpg"
    },
    {
        id: 3,
        title: "Pet Dash",
        price: 15.99,
        image: "https://tuapi.eees.cc/dongman/pc/TUAPI-EEES-CC-1198086147.jpg"
    },
    {
        id: 4,
        title: "Pet JSL",
        price: 15.99,
        image: "https://tuapi.eees.cc/dongman/pc/TUAPI-EEES-CC-0053583168.jpg"
    },
    {
        id: 5,
        title: "Pet Bed",
        price: 15.99,
        image: "https://tuapi.eees.cc/dongman/pc/TUAPI-EEES-CC-1409069871.jpg"
    },
    {
        id: 6,
        title: "Pet Bed",
        price: 15.99,
        image: "https://tuapi.eees.cc/dongman/pc/TUAPI-EEES-CC-1718847561.png"
    }



];

let item_main = ref(null);
let row = 2;

onMounted(() => {
    axios.get('http://localhost:3001/item_main')
        .then(response => {
            item_main.value = response.data.data.items;
            console.log(item_main.value);
        })
        .catch(error => {
            console.error(error);
        });
});
</script>

<style lang="scss" scoped></style>