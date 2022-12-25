<template>
    <button
        class="btn rounded-full bg-gradient-to-r from-secondaryColor to-emerald-600 hover:scale-[1.035] transtion-all duration-200 text-primaryWhite font-semibold">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    mounted() {

    },
    methods: {

    }
})
</script>

<style lang="scss" scoped>
.btn {
    padding-top: clamp(1em, 0.9vw, 1.5em);
    padding-right: clamp(1.75em, 2vw, 2.5em);
    padding-bottom: clamp(1em, 0.9vw, 1.5em);
    padding-left: clamp(1.75em, 2vw, 2.5em);
}

.btn-xs {
    font-size: clamp(0.75rem, 0.7vw, 1.5rem);

    padding-top: clamp(0.5em, 0.6vw, 1.5em);
    padding-right: clamp(1.75em, 1.25vw, 2.5em);
    padding-bottom: clamp(0.5em, 0.6vw, 1.5em);
    padding-left: clamp(1.75em, 1.25vw, 2.5em);
}

.btn-sm {
    font-size: clamp(0.75rem, 0.8vw, 1.5rem);
}

.btn-md {
    font-size: clamp(0.8rem, 0.9vw, 2rem) !important;
}

.btn-lg {
    font-size: clamp(0.85rem, 1vw, 2.5rem) !important;
}
</style>