<template>
    <div class="container">
        <Navbar />
        <ListTable>
            <template v-slot:caption>
                <div class="fs-4 mb-3">
                    <i class="bi bi-bag-heart"></i>
                    My Cart
                </div>
            </template>
            <template v-slot:thead>
                <tr>
                    <th>Item Id</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                    <th>Action</th>
                </tr>
            </template>
            <template v-slot:tbody>
                <tr>
                    <td>
                        <router-link to="/item_info/1">EST-1</router-link>
                    </td>
                    <td>Large Fresh Water Fish</td>
                    <td>
                        <input type="number" class="form-control" min="1" max="50" value="1">
                    </td>
                    <td>$199.99</td>
                    <td>$199.99</td>
                    <td>
                        <button class="btn btn-outline-danger btn-sm"><i class="bi bi-trash-fill"></i>Remove</button>
                    </td>
                </tr>
            </template>
        </ListTable>
        <div class="d-flex justify-content-between">
            <div>
                <h6>Total: $199.99</h6>
            </div>
            <div>
                <button @click="showModal" class="btn btn-outline-primary btn-sm">Proceed to Checkout</button>
            </div>
        </div>
    </div>
        <ModalShow :title="`${title}`" ref="thisModal">
            <template #body>
                Your total is $199.99. 
                <br>
                Are you sure you want to commit your order?
            </template>
            <template #footer>
                <button @click="closeModal"  class="btn btn-primary">check</button>
            </template>
        </ModalShow>
</template>

<script setup>
import Navbar from "@/component/Navbar.vue";
import ListTable from "@/component/ListTable.vue";
import { ref } from "vue";
import {useRouter} from "vue-router";
import ModalShow from "@/component/ModalShow.vue";
const title = "Commit your order";
// const message = "Are you sure you want to commit your order?";
// const target_address = "/cart";
// const toggle_text = "Proceed to Checkout";
// const button_text = "Commit";
let thisModal = ref(null);
let router = useRouter();
function showModal() {
    thisModal.value.show();
}
function closeModal () {
    thisModal.value.close();
    router.push('/orderConfirm')
}
</script>
