<template>
    <div class="container">
        <Navbar />
        <div class="row d-flex justify-content-center align-items-center ">
            <div class="row d-flex col-8 mt-4 justify-content-center align-items-center">
                <div class="alert alert-primary" role="alert">
                    <p>J2ee&#x1F600, your order has been submitted <strong>successfully</strong></p>
                    <router-link :to="`/main`" name="" id="" class="btn btn-sm btn-outline-danger " href="#" role="button"><i class="bi bi-arrow-bar-right m-1"></i>Continue To Shop  🥰	</router-link>
                </div>
            </div>
            <div class="col-8 justify-content-center">
                <div class="m-3">
                    <h4><i class="bi bi-credit-card"></i> Order Detail</h4>
                </div>
                <div v-for="item in items" :key="item.item_id" class="card mb-3" style="max-width: 1000px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img :src="item.url" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{ item.item_id }}</h5>
                                <p class="card-text">A total of {{ item.quantity }} items have been purchased</p>
                                <p class="card-text"><small class="text-muted">Total price for {{ item.quantity }}
                                        items: {{ item.price }}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-8">
                            <div class="card card-stepper" style="border-radius: 8px;">

                                <div class="card-body p-4">

                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <div>
                                            <h5 class="mb-0">Order schedule
                                            </h5>
                                        </div>
                                        <div class="text-end">
                                            <p class="mb-0"><i class="bi bi-person-fill-check m-2"></i><small
                                                    class="text-muted">j2ee</small></p>
                                            <p class="mb-0">Your order has been delivered</p>
                                        </div>
                                    </div>

                                    <ul id="progressbar-2"
                                        class="d-flex justify-content-between mx-0 mt-0 mb-2 px-0 pt-0 pb-2">
                                        <li class="step0   active  text-center" id="step1"></li>
                                        <li class="step0 text-center" id="step2"></li>
                                        <li class="step0 text-center" id="step3"></li>
                                        <li class="step0 text-muted text-end" id="step4"></li>
                                    </ul>

                                    <div class="d-flex justify-content-between">
                                        <div class="d-lg-flex align-items-center">
                                            <i class="bi bi-calendar2-check-fill fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                                            <div>
                                                <p class="fw-bold mb-1">Order</p>
                                                <p class="fw-bold mb-0">Processed</p>
                                            </div>
                                        </div>
                                        <div class="d-lg-flex align-items-center">
                                            <i class="bi bi-truck fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                                            <div>
                                                <p class="fw-bold mb-1">Order</p>
                                                <p class="fw-bold mb-0">Shipped</p>
                                            </div>
                                        </div>
                                        <div class="d-lg-flex align-items-center">
                                            <i class="bi bi-box fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                                            <div>
                                                <p class="fw-bold mb-1">Order</p>
                                                <p class="fw-bold mb-0">En Route</p>
                                            </div>
                                        </div>
                                        <div class="d-lg-flex align-items-center">
                                            <i class="bi bi-check-circle-fill fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                                            <div>
                                                <p class="fw-bold mb-1">Order</p>
                                                <p class="fw-bold mb-0">Signed</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center align-items-center">


                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import Navbar from "@/component/Navbar.vue";
import { ref } from "vue";
const items = ref([
    {
        item_id: "EST-1",
        price: 199.99,
        quantity: 1,
        url: "https://tuapi.eees.cc/dongman/pc/TUAPI-EEES-CC--1564737439.jpg",
    },
    {
        item_id: "EST-2",
        price: 299.99,
        quantity: 2,
        url: "https://tuapi.eees.cc/dongman/pc/TUAPI-EEES-CC--1564737439.jpg",
    },
    {
        item_id: "EST-2",
        price: 299.99,
        quantity: 2,
        url: "https://tuapi.eees.cc/dongman/pc/TUAPI-EEES-CC--1564737439.jpg",
    },
    {
        item_id: "EST-2",
        price: 299.99,
        quantity: 2,
        url: "https://tuapi.eees.cc/dongman/pc/TUAPI-EEES-CC--1564737439.jpg",
    },
]);
</script>

<style  scoped>
.card-stepper {
    z-index: 0
}

#progressbar-2 {
    color: #455A64;
}

#progressbar-2 li {
    list-style-type: none;
    font-size: 6px;
    width: 33.33%;
    float: left;
    position: relative;
}

#progressbar-2 #step1:before {
    content: '\f058';
    font-family: "Font Awesome 5 Free";
    color: #fff;
    width: 37px;
    margin-left: 0px;
    padding-left: 0px;
}

#progressbar-2 #step2:before {
    content: '\f058';
    font-family: "Font Awesome 5 Free";
    color: #fff;
    width: 37px;
}

#progressbar-2 #step3:before {
    content: '\f058';
    font-family: "Font Awesome 5 Free";
    color: #fff;
    width: 37px;
    margin-right: 0;
    text-align: center;
}

#progressbar-2 #step4:before {
    content: '\f111';
    font-family: "Font Awesome 5 Free";
    color: #fff;
    width: 37px;
    margin-right: 0;
    text-align: center;
}

#progressbar-2 li:before {
    line-height: 37px;
    display: block;
    font-size: 12px;
    background: #c5cae9;
    border-radius: 50%;
}

#progressbar-2 li:after {
    content: '';
    width: 100%;
    height: 10px;
    background: #c5cae9;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 15px;
    z-index: -1;
}

#progressbar-2 li:nth-child(1):after {
    left: 1%;
    width: 100%
}

#progressbar-2 li:nth-child(2):after {
    left: 1%;
    width: 100%;
}

#progressbar-2 li:nth-child(3):after {
    left: 1%;
    width: 100%;
    background: #c5cae9 !important;
}

#progressbar-2 li:nth-child(4) {
    left: 0;
    width: 37px;
}

#progressbar-2 li:nth-child(4):after {
    left: 0;
    width: 0;
}

#progressbar-2 li.active:before,
#progressbar-2 li.active:after {
    background: #6520ff;
}
</style>