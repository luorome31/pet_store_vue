<template>
  <nav class="nav justify-content-center">
    <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
    <router-link to="/main" class="nav-link">Main</router-link>
    <router-link to="/cart" class="nav-link">
      <img src="../assets/cart.gif" class="img-fluid rounded-top" alt="cart" />
    </router-link>

    <router-link v-if="!loginAccount" class="nav-link" to="/login">Sign In</router-link>
    <a v-if="loginAccount" class="nav-link" @click="signOut">Sign Out</a>
    <router-link v-if="loginAccount" class="nav-link" to="/userEdit">My Account</router-link>

    <div class="btn-group">
      <button class="btn dropdown-toggle text-primary" type="button" id="triggerId" data-bs-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Category
      </button>
      <div class="dropdown-menu dropdown-menu-start text-center" aria-labelledby="triggerId">
        <router-link to="/products/dog" class="dropdown-item">Dog</router-link>
        <router-link to="/products/cat" class="dropdown-item">Cat</router-link>
        <router-link to="/products/bird" class="dropdown-item">Bird</router-link>
        <router-link to="/products/fish" class="dropdown-item">Fish</router-link>
      </div>
    </div>
    <form class="d-flex position-relative" @submit.prevent="searchProduct">
      <input type="text" v-model="keyword" @input="onInput" class="form-control" aria-describedby="helpId" placeholder="Search product" />
      <router-link to="/search" type="button" class="btn btn-primary">
        Search
      </router-link>
      <div v-if="suggestions.length" class="suggestions-list position-absolute">
        <div v-for="(suggestion, index) in suggestions" :key="index" class="suggestion-item" @click="selectSuggestion(suggestion)">
          {{ suggestion }}
        </div>
      </div>
    </form>
  </nav>
</template>

<script setup>
import { ref, watchEffect, nextTick } from "vue";
import { useRouter } from "vue-router";
import { useTokenStore } from "@/stores/token";

const router = useRouter();
const loginAccount = ref(null);
const keyword = ref("");
const suggestions = ref([]);
const tokenStore = useTokenStore();

const testProducts = ["FL-DLH-02", "FI-FW-02", "FL-DLH-01", "FI-FW-02", "AV-SB-02", "AV-SB-02"];

watchEffect(() => {
  console.log(tokenStore.tokenValue);
  loginAccount.value = tokenStore.tokenValue;
});

const signOut = () => {
  tokenStore.removeToken();
  loginAccount.value = null;
};

const searchProduct = () => {
    router.push("/search");
};

const onInput = () => {
  if (keyword.value) {
    suggestions.value = testProducts.filter(product => 
      product.toLowerCase().includes(keyword.value.toLowerCase())
    );
  } else {
    suggestions.value = [];
  }
};

const selectSuggestion = (suggestion) => {
  keyword.value = suggestion;
  suggestions.value = [];
  searchProduct();
};

const logined = async () => {
  loginAccount.value = "j2ee";
  await nextTick();
};

defineExpose({ logined });
</script>

<style scoped>
.suggestions-list {
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 1ch;
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
}
.suggestion-item {
  padding: 8px;
  cursor: pointer;
}
.suggestion-item:hover {
  background-color: #f0f0f0;
}
</style>
