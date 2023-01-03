<template>
    <section class="relative">
        <div class="max-w-[90%] xs:max-w-[100%] xs:px-[18vw] mx-auto">
            <div class="md:h-screen pt-[12vh] pb-[8vh] md:py-[0] text-center grid place-content-center">
                <div>
                    <h1>
                        Akademia squasha <TextGradient>danfit</TextGradient>
                    </h1>

                    <div class="mt-6 mb-8 sm:mb-14 font-color-secondary">
                        <h2>
                            Najlepsze treningi squasha w Zielonej Górze,
                            <span>
                                <Link link="Calendar" :underline="true">zapisz się</Link>
                            </span>
                            i zacznij trenować z nami!
                        </h2>
                    </div>

                    <router-link :to="{ name: 'Calendar' }">
                        <Button class="w-full sm:w-auto btn-lg btn-primary">{{ buttonText }}</Button>
                    </router-link>
                </div>
            </div>
        </div>

        <img :src="racket"
            class="absolute top-[35%] xs:top-[70%] xl:top-[72.5%] left-[15%] w-[45vw] rotate-[90deg] xs:-rotate-[30deg] min-w-[250px] xs:min-w-[400px] md:min-w-[700px] opacity-40 xs:opacity-100 z-[-1] translate-x-[-50%] translate-y-[-50%] select-none">
        <img :src="racket"
            class="absolute top-[70%] xs:top-[70%] xl:top-[72.5%] left-[85%] w-[45vw] rotate-[-90deg] xs:rotate-[30deg] min-w-[250px] xs:min-w-[400px] md:min-w-[700px] opacity-40 xs:opacity-100 z-[-1] translate-x-[-50%] translate-y-[-50%] select-none">
        <img :src="ball"
            class="absolute top-[30%] lg:top-[20%] left-[5%] w-[5vw] blur-[1px] md:blur-[1px] rotate-45 z-[-1] translate-x-[-50%] translate-y-[-50%] hidden xs:block select-none">
        <img :src="ball"
            class="absolute top-[27.5%] lg:top-[20%] left-[86%] w-[8vw] blur-[1px] md:blur-[4px] rotate-90 z-[-1] translate-x-[-50%] translate-y-[-50%] hidden xs:block select-none">
        <img :src="ball"
            class="absolute top-[70%] lg:top-[80%] left-[22%] w-[4vw] blur-[1px] md:blur-[2px] rotate-0 z-[-1] translate-x-[-50%] translate-y-[-50%] hidden sm:block select-none">
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import racket from '../../assets/hero/racket.png';
import ball from '../../assets/hero/ball_white.png';

import { Button, Link, TextGradient } from '../../components'
export default defineComponent({
    components: {
        Button,
        Link,
        TextGradient
    },
    data() {
        return {
            racket: racket,
            ball: ball,
            buttonText: 'Zarezerwuj trening'
        }
    },
})
</script>

<style lang="scss">

</style>