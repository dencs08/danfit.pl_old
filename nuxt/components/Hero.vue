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
                            Profesjonalne treningi squasha,
                            <span>
                                <LinkCustom link="Calendar" :underline="true">zapisz się</LinkCustom>
                            </span>
                            i zacznij trenować z nami!
                        </h2>
                    </div>

                    <NuxtLink :to="{ name: 'Calendar' }">
                        <Button class="w-full sm:w-auto btn-lg btn-primary">Zarezerwuj trening</Button>
                    </NuxtLink>
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
import racket from '../assets/img/hero/racket.png';
import ball from '../assets/img/hero/ball_white.png';

export default {
    data() {
        return {
            racket: racket,
            ball: ball,
            buttonText: 'Zarezerwuj trening'
        }
    }
}
</script>

<style lang="scss"></style>