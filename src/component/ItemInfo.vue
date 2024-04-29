<template>
    <div class="row">
        <div class="card mb-3 col-10 offset-1 mt-5 ">
            <div class="row g-0 justify-content-center align-items-center">
                <div class="col-md-4">
                    <img src="@/assets/image1.jpeg" alt="My Image">
                    <img :src="`@/assets/${itemDetail.images}`" class="img-fluid rounded-start m-1 rounded ms-4" alt="...">
                </div>
                <div class="col-md-8 ">
                    <div class="card-body ms-5">
                        <h5 class="card-title m-3 ">Item Information <i class="bi bi-cart-plus"></i></h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Item ID:</strong> EST-1</li>
                            <li class="list-group-item"><strong>Product ID:</strong> FI-SW-01</li>
                            <li class="list-group-item"><strong>Description:</strong> Large Fresh Water fish from Japan.
                            </li>
                            <li class="list-group-item"><strong>Manufacturer:</strong> XYZ Pets</li>
                            <li class="list-group-item"><strong>Price:</strong> $199.99</li>
                            <li class="list-group-item"><strong>Stock:</strong> 50</li>
                            <li class="list-group-item">
                                <router-link to="/cart" type="button" class="btn btn-primary">
                                    add to cart
                                    <i class="bi bi-basket-fill"></i>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import img from "@/assets/image1.jpeg";
import { onBeforeMount, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

let itemDetail = ref(null);

onBeforeMount(() => {
    const route = useRoute();
    const item_id = route.params.id;
    console.log(item_id)
    axios.get("http://localhost:3001/" + item_id).then((json) => {
        itemDetail.value = json.data.data;
        console.log(json.data.data);
        console.log(itemDetail.value);
    })
});
</script>

<style lang="scss" scoped></style>