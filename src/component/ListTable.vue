<template>
    <div class = "row">
        <div
            class="table-responsive text-center col-8 offset-2 border-1 mt-4"
        >
            <table-caption>
                <slot name="caption"></slot>
            </table-caption>
            <table
                class="table table-bordered table-sm table-responsive text-center"
            >
                <thead>
                    <slot name="thead"></slot>
                </thead>
                <tbody>
                    <slot name="tbody"></slot>
                </tbody>
            </table>
        </div>
        
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.table-custom {
  width: auto; /* 自动调整宽度 */
}
</style>