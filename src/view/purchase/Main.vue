<template>
    <div class="container">
        <Navbar />
        <div class = "row mt-4">
            <ItemCard v-for="item in fakeData" :key="item.id">
            <template v-slot:img>
                <img :src="item.image" alt="item.name" class="w-100">
            </template>
            <template v-slot:title>
                <h4 class="card-title"> {{ item.title }}</h4>
            </template>
            <template v-slot:price>
                <p class="card-text"> {{ item.price }}</p>
            </template>
        </ItemCard>
        </div>
        
    </div>
</template>

<script setup>
import Navbar from "../../component/Navbar.vue";
import ItemCard from "@/component/ItemCard.vue";
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


    // Add more fake data objects as needed
];

let row = 2;
</script>

<style lang="scss" scoped></style>