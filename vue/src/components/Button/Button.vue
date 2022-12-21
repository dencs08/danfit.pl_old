<template>
    <button
        class="w-full xs:w-auto px-0 xs:px-8 md:px-10 lg:px-10 py-3 lg:py-4 rounded-full bg-primaryColor hover:bg-secondaryColor transtion-all duration-200 text-primaryWhite font-semibold">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

})
</script>

<style lang="scss">

</style>