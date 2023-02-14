<template>
    <router-link :to="{ name: link }">
        <span class="" :class="{ underline: underline, 'text-primaryBlack': black, 'text-secondaryColor': !black }">
            <slot></slot>
        </span>
    </router-link>
</template>
<script lang="ts">
export default {
    props: {
        link: String,
        underline: {
            default: true,
            type: Boolean
        },
        black: {
            default: false,
            type: Boolean
        },
    }
}
</script>
<style lang="scss" scoped>
span {
    text-decoration: none;
}

.underline {
    text-decoration: underline;

    &:after {
        content: "";
        border-bottom: solid 1px;
        border-color: aqua;
    }
}
</style>