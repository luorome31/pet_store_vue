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
                <tr v-for="(item, index) in cartItems" :key="item.item_id">
                    <td>
                        <router-link :to="`/item_info/${item.item_id}`">{{ item.item_id }}</router-link>
                    </td>
                    <td>{{ item.product_id }}</td>
                    <td>
                        <input type="number" class="form-control" min="1" max="50" :value="`${item.quantity}`"
                            @input="input_value_changed($event.target.value, index)">
                    </td>
                    <td>${{ item.price }}.00</td>
                    <td>${{ item.price * item.quantity }}.00</td>
                    <td>
                        <button class="btn btn-outline-danger btn-sm" @click="remove(index)"><i
                                class="bi bi-trash-fill"></i>Remove</button>
                    </td>
                </tr>
            </template>
        </ListTable>
        <div class="d-flex justify-content-between">
            <div>
                <h6>Total: ${{ total_price }}.00</h6>
            </div>
            <div>
                <button @click="showModal" class="btn btn-outline-primary btn-sm">Proceed to Checkout</button>
            </div>
        </div>
    </div>
    <ModalShow :title="`${title}`" ref="thisModal">
        <template #body>
            Your total is ${{ total_price }}.00.
            <br>
            Are you sure you want to commit your order?
        </template>
        <template #footer>
            <button @click="closeModal" class="btn btn-primary">check</button>
        </template>
    </ModalShow>

    <ModalShow :title="`deletion confirm`" ref="removeModal">
        <template #body>
            Do you confirm deletion?
            <br>
        </template>
        <template #footer>
            <button @click="deleteModal" class="btn btn-primary">confirm</button>
        </template>
    </ModalShow>
</template>

<script setup>
import Navbar from "@/component/Navbar.vue";
import ListTable from "@/component/ListTable.vue";
import { ref, onBeforeMount, reactive, computed, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import ModalShow from "@/component/ModalShow.vue";
import axios from "axios";
import { useTokenStore } from "@/stores/token";
const title = "Commit your order";
let thisModal = ref(null);
let removeModal = ref(null);
let router = useRouter();
let deleteItem = null;
function showModal() {
    thisModal.value.show();
}
function closeModal() {
    thisModal.value.close();
    router.push('/orderConfirm')
}
function deleteModal() {
    removeModal.value.close();
    cartItems.value.splice(deleteItem, 1);
}
//单个物品数量的改变监听
function input_value_changed(newValue, index) {
    cartItems.value[index].quantity = newValue;
}
function remove(index) {
    deleteItem = index;
    removeModal.value.show();
}


/* ----------------------------------------------------------------*/
let cartItems = ref(null);
//设置计算属性：总价
let total_price = computed(() => {
    let temp = 0;
    if (cartItems.value?.length) {
        cartItems.value.forEach(item => {
            temp += item.price * item.quantity;
        });
    }
    return temp;
})
//请求购物车数据
onBeforeMount(() => {
    let number = useTokenStore().getNumber;
    console.log("before" + number)
    if (number == 1) {
        axios.get("http://localhost:3001/cart_init").then((json) => {
            cartItems.value = json.data.data.items;
            total_price.value = json.data.total_price;
        })
    }
    if (number  == 2) {
        axios.get("http://localhost:3001/cart_after").then((json) => {
            cartItems.value = json.data.data.items;
            total_price.value = json.data.total_price;
        })
    }
    if (number == 3){
        axios.get("http://localhost:3001/cart_3").then((json) => {
            cartItems.value = json.data.data.items;
            total_price.value = json.data.total_price;
        })
    }
}
);
onBeforeUnmount(() => {
    let number = useTokenStore();
    number.addNumber();
})
</script>
