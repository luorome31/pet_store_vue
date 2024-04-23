<template>
    <nav class="nav justify-content-center  ">
        <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
        <router-link to="/main" class="nav-link">Main</router-link>
        <router-link to="/cart" class="nav-link">
            <img src="../assets/cart.gif" class="img-fluid rounded-top" alt="cart" />
        </router-link>

        <router-link v-if="!loginAccount" class="nav-link" to="/signonForm">Sign In</router-link>
        <a v-if="loginAccount" class="nav-link" @click="signOut">Sign Out</a>
        <router-link v-if="loginAccount" class="nav-link" to="/editAccount">My Account</router-link>

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
        <form class="d-flex ">
            <input type="text" class="form-control " aria-describedby="helpId" placeholder="Search product" />
            <router-link to="/search"type="button" class="btn btn-primary">
                Search
            </router-link>
        </form>


    </nav>

</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const loginAccount = ref("luo");
        const keyword = ref('');

        const signOut = () => {
            loginAccount.value = null;
        };

        const searchProduct = () => {
            router.push({ name: 'searchProduct', query: { keyword: keyword.value } });
        };

        return {
            loginAccount,
            keyword,
            signOut,
            searchProduct
        };
    }
};
</script>

<style scoped>
</style>