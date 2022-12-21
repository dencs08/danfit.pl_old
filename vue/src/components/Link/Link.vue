<template>
    <router-link :to="link">
        <span class="text-secondaryColor underline">
            <slot></slot>
        </span>
    </router-link>
</template>
<script lang="ts">
export default {
    props: {
        link: String,
    }
}
</script>
<style lang="scss">

</style>