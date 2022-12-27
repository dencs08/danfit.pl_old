<template>
    <Navbar />
    <!-- <section class="absolute h-screen w-screen">
        <img :src="racket"
            class="absolute top-[35%] xs:top-[60%] xl:top-[72.5%] left-[15%] w-[45vw] rotate-[90deg] xs:-rotate-[30deg] min-w-[250px] opacity-40 xs:opacity-100 z-[-1] translate-x-[-50%] translate-y-[-50%]">
        <img :src="racket"
            class="absolute top-[70%] xs:top-[60%] xl:top-[72.5%] left-[85%] w-[45vw] rotate-[-90deg] xs:rotate-[30deg] min-w-[250px] opacity-40 xs:opacity-100 z-[-1] translate-x-[-50%] translate-y-[-50%]">
        <img :src="ball"
            class="absolute top-[30%] lg:top-[20%] left-[5%] w-[5vw] blur-[1px] md:blur-[1px] rotate-45 z-[-1] translate-x-[-50%] translate-y-[-50%] hidden xs:block">
        <img :src="ball"
            class="absolute top-[27.5%] lg:top-[20%] left-[86%] w-[8vw] blur-[1px] md:blur-[4px] rotate-90 z-[-1] translate-x-[-50%] translate-y-[-50%] hidden xs:block">
        <img :src="ball"
            class="absolute top-[70%] lg:top-[80%] left-[22%] w-[4vw] blur-[1px] md:blur-[2px] rotate-0 z-[-1] translate-x-[-50%] translate-y-[-50%] hidden sm:block">
    </section> -->
    <section class="overflow-hidden relative">

        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Navbar } from '../components'

// import racket from '../assets/hero/racket.png';
// import ball from '../assets/hero/ball_white.png';

export default defineComponent({
    components: {
        Navbar
    },

    data() {
        return {
            // racket: racket,
            // ball: ball
        }
    }
})
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