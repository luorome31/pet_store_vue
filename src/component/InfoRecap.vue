<template>
    <div class="col-md-5 col-xl-4 offset-xl-1 m-3">

        <div class="rounded d-flex flex-column p-2 bg-body-tertiary">
            <div class="p-2 me-3">
                <h4>{{ title }}</h4>
            </div>
            <div class="border-top px-2 mx-2"></div>
            <div class="p-2 d-flex" v-for="(item, index) in previewDetails" :key="index">
                <div class="col-8" v-html="item.description"></div>
                <div class="ms-auto" v-html="item.value"></div>
            </div>
            <div class="border-top px-2 mx-2"></div>
            <div class="p-2 d-flex pt-3" v-for="(item, index) in middleDetails" :key="index">
                <div class="col-8" v-html="item.description"></div>
                <div class="ms-auto" v-html="item.value"></div>
            </div>
            <div class="border-top px-2 mx-2"></div>
            <div class="p-2 d-flex pt-3" v-for="(item, index) in lastDetails" :key="index">
                <div class="col-8" v-html="item.description"></div>
                <div class="ms-auto" v-html="item.value"></div>
            </div>
            <slot name="operation"></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Infromation&Payment',
    },
    previewDetails: {
        type: Array,
        default: () => [
            { description: 'Card Type', value: '铁道支行' },
            { description: 'Card Number', value: '88888888' },
            { description: 'Expiry Date', value: '- 10d' },
        ],
    },
    middleDetails: {
        type: Array,
        default: () => [
            { description: 'First name', value: 'j2ee' },
            { description: 'Last name', value: 'j2ee' },
            { description: 'Address', value: '<b>lorem</b>' },
            { description: 'City', value: '<b>lorem</b>' },
            { description: 'State', value: 'lorem' },
            { description: 'Zip', value: '- 366300' },
            { description: 'Country', value: '<b>Antarctica</b>' },
        ],
    },
    lastDetails: {
        type: Array,
        default: () => [
            { description: '<b>Total</b>', value: '<b class="text-success">$41.00</b>' },
        ],
    },
}
);

// 从props中提取变量
const { title, previewDetails, middleDetails, lastDetails } = props;
</script>

<style scoped></style>