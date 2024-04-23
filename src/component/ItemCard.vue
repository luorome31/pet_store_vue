<template>
        <div class="card text-center col-3 mb-3">
            <slot name="img"></slot>
            
            <div class="card-body">
                <slot name="title"></slot>
                <slot name="price"></slot>
            </div>
        </div>

</template>

<script setup>
import { ref } from "vue";
import { getPurchases } from "@/service/purchase";

const item = ref({
    url: "https://via.placeholder.com/150",
    title: "Title",
    body: "Body",
});
const pama = {
    category: 'dongman',
}
 getPurchases(pama).then((res) => {
    console.log(res);
    item.url = res.img;
});
</script>

<style lang="scss" scoped></style>