<template>
    <div class="row">
        <div class="card mb-3 col-10 offset-1 mt-5 ">
            <div class="row g-0 justify-content-center align-items-center">
                <div class="col-md-4">
                    <img :src="itemDetail && itemDetail.image ? imageUrl: '@/assets/image1.jpeg'" class="rounded" style="max-width: 400px;" alt="My Image">
                </div>
                <div class="col-md-8 ">
                    <div class="card-body ms-5">
                        <h5 class="card-title m-3 ">Item Information <i class="bi bi-cart-plus"></i></h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Item ID: </strong> {{ itemDetail ? itemDetail.item_id : '' }}</li>
                            <li class="list-group-item"><strong>Product ID: </strong> {{ itemDetail ? itemDetail.product_id : '' }}</li>
                            <li class="list-group-item"><strong>Description:</strong> {{ itemDetail ? itemDetail.description : '' }}
                            </li>
                            <li class="list-group-item"><strong>Manufacturer:</strong> {{ itemDetail ? itemDetail.manufacturer : '' }}</li>
                            <li class="list-group-item"><strong>Price:</strong> {{ itemDetail ? itemDetail.price : '' }}</li>
                            <li class="list-group-item"><strong>Stock:</strong> {{ itemDetail ? itemDetail.stock : '' }}</li>
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
import { computed, onBeforeMount, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

let itemDetail = ref(null);
let imageUrl = computed(()=>{
    return "/src/assets/"+itemDetail.value.image;
})
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