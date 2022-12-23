<template>
    <section class="relative">
        <div class="container grid gap-6 lg:grid-cols-2">
            <div class="lg:py-6 lg:pr-16">
                <h3 class="mb-6">Jak <TextUnderline>zacząć trenować?</TextUnderline>
                </h3>
                <div v-for="step in steps" class="flex">
                    <div class="flex flex-col items-center mr-4">
                        <div>
                            <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                                <Icon v-if="!step.last" icon="teenyicons:arrow-down-outline" width="18px" />
                                <Icon v-if="step.last" icon="mingcute:check-line" width="20px" />
                            </div>
                        </div>
                        <div v-if="!step.last" class="w-px h-full bg-gray-300"></div>
                    </div>
                    <div class="pt-1 pb-8">
                        <p class="mb-2 text-lg font-bold">{{ step.title }}</p>
                        <p class="text-gray-700">
                            {{ step.subtitle }}
                        </p>
                    </div>
                </div>
                <router-link to="#">
                    <Button class="w-full xs:w-auto">Kalendarz zajeć</Button>
                </router-link>
            </div>
            <img class="absolute min-w-[700px] w-[100vw] lg:min-w-[750px] xl:min-w-[850px] 2xl:min-w-[1000px] lg:w-[57%] max-w-[1150px] right-[-65%] md:right-[-45%] lg:right-[3%] top-[40%] lg:top-[50%] z-[-1] translate-y-[-50%]"
                src="../../assets/illustrations/girl_1.png" alt="" />
        </div>
    </section>
</template>
  
<script lang="ts">
import { Icon } from '@iconify/vue';
import { Button, TextUnderline } from '../../components';
export default {
    components: {
        Icon,
        Button,
        TextUnderline,
    },
    data() {
        return {
            steps: [
                {
                    title: 'Wybierz zajęcia i poziom',
                    subtitle: 'Wybierz typ zajęć jaki Cię interesuje, zajęcia grupowe, indywidualne lub w parach i podaj swój poziom gry.',
                    last: false,
                },
                {
                    title: 'Wybierz datę',
                    subtitle: 'Wybierz wolną datę treningu z naszego kalendarza dostępnego na stronie po założeniu konta.',
                    last: false,
                },
                {
                    title: 'Zapisz się',
                    subtitle: 'Po wybraniu daty i typu zajęć po prostu kliknij guzik "zarezerwuj".',
                    last: false,
                },
                {
                    title: 'Potwierdzenie',
                    subtitle: 'Poczekaj na potwierdzenie zajęć przez jednego z naszych trenerów. Jeśli dostaniesz potwierdzenie, to wszystko!',
                    last: false,
                },
                {
                    title: 'Trenuj razem z nami!',
                    subtitle: '',
                    last: true
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 756px) {
    img {
        -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)) 50%, to(rgba(0, 0, 0, 0) 100%));
        mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
    }
}

@media only screen and (max-width: 756px) {
    img {
        -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)) 0%, to(rgba(0, 0, 0, 0) 100%));
        mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0) 100%);
    }
}
</style>