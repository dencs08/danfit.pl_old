<template>
    <Navbar />
    <section class="overflow-hidden relative">
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </section>
</template>

<script lang="ts">
</script>

<style lang="scss">
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.250s ease-out;
}
</style>