<template>
    <div class="container" ref="context">
        <div class="m-2">
            <h1 class="text-center"><i class="bi bi-alipay text-primary"></i></h1>
        </div>
        <form>
            <div class="form-group">
                <label for="card-number">Number</label>
                <input type="text" class="form-control" id="card-number" placeholder="Enter Alipay account number">
            </div>
            <div class="form-group">
                <label for="amount">Password</label>
                <input type="password" class="form-control" id="amount" placeholder="Enter payment password">
            </div>
        </form>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    const context = ref(null);
    function clearContext(){
        context.value.innerHTML = "";
        context.value.classList.add("loader");
        }
    defineExpose({clearContext})
</script>

<style  scoped>
.loader {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 6px;
  background:
    conic-gradient(from 135deg at top,currentColor 90deg, #0000 0) 0 calc(50% - 4px)/17px 8.5px,
    radial-gradient(farthest-side at bottom left,#0000 calc(100% - 6px),currentColor calc(100% - 5px) 99%,#0000) top right/50%  50% content-box content-box,
    radial-gradient(farthest-side at top        ,#0000 calc(100% - 6px),currentColor calc(100% - 5px) 99%,#0000) bottom   /100% 50% content-box content-box;
  background-repeat: no-repeat;
  animation: l11 1s infinite linear;
}
@keyframes l11{ 
  100%{transform: rotate(1turn)}
}
</style>