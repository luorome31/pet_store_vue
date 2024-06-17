<template>
    <div class="container">
        <Navbar />
        <div class="row">
            <div class="col-7 justify-content-center">
                <div class="m-3">
                    <h4><i class="bi bi-credit-card"></i> Order Detail</h4>
                </div>
                <div v-for="item in items" :key="item.item_id" class="card mb-3" style="max-width: 750px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img :src="item.url" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{ item.item_id }}</h5>
                                <p class="card-text">A total of {{ item.quantity }} items have been purchased</p>
                                <p class="card-text"><small class="text-muted">Total price for {{ item.quantity }}
                                        items: {{ item.price }}.00</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <InfoRecap>
                <template #operation>
                    <button type="button" class="btn btn-outline-primary" @click="showModal">
                        Confirm
                    </button>
                </template>
            </InfoRecap>
        </div>
    </div>
    <ModalShow :title="`${title}`" ref="thisModal">
        <template #body>
            <PayShow ref="payment" />
        </template>
        <template #footer>
            <button @click="closeModal" class="btn btn-primary">
                Proceed to payment </button>
        </template>
    </ModalShow>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from "@/component/Navbar.vue";
import ModalShow from "@/component/ModalShow.vue";
import ListTable from "@/component/ListTable.vue";
import InfoRecap from "@/component/InfoRecap.vue";
import ItemCard from "@/component/ItemCard.vue";
import PayShow from "@/component/PayShow.vue";
import img1 from "@/assets/pexels-fish-1.jpeg";
import img2 from "@/assets/pexels-fish-2.jpeg";
import img3 from "@/assets/pexels-fish-3.jpeg";
import img4 from "@/assets/pexels-fish-4.jpeg";


const items = ref([
    {
        item_id: "EST-1",
        price: 17.00,
        quantity: 1,
        url: img1,
    },
    {
        item_id: "EST-10",
        price: 24.00,
        quantity: 2,
        url: img2,
    },

]);


const title = "Payment Confirmation";
let thisModal = ref(null);
let router = useRouter();
let payment = ref(null);
function showModal() {
    thisModal.value.show();
}
function closeModal() {
    setTimeout(() => {
        payment.value.clearContext();

    }, 300)
    setTimeout(() => {
        thisModal.value.close();
        router.push('/orderDetail');
    }, 1300);
}
</script>

<style lang="scss" scoped></style>