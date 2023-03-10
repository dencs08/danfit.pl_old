<template>
    <div>
        <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
                <h3 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Jak działamy?
                </h3>
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Zobacz nasz proces
                </p>
                <p class="mt-6 text-base leading-7 text-gray-600">W danfit dokładamy wszelkich starań aby nasze usługi
                    były jak najwyższej jakości. Wierzymy, że nasze działania potrafią budować nowe relacje i
                    determinacje do uprawiania sportów.</p>
            </div>
            <dl
                class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                    <dt class="font-semibold text-gray-900">
                        <CheckIcon class="absolute top-1 left-0 h-5 w-5 text-indigo-500" aria-hidden="true" />
                        {{ feature.name }}
                    </dt>
                    <dd class="mt-2">{{ feature.description }}</dd>
                </div>
            </dl>
        </div>
    </div>
</template>
<script lang="ts">
import { CheckIcon } from '@heroicons/vue/20/solid'
export default {
    components: {
        CheckIcon
    },
    data() {
        return {
            features: [
                {
                    name: 'Treningi',
                    description: 'Naszym priorytetem jest oferowanie najlepszych treningów squasha dla wszystkich naszych klientów, bez względu na ich wiek czy poziom zaawansowania. ',
                },
                {
                    name: 'Bezpieczeństwo',
                    description: 'Bezpieczeństwo jest dla nas absolutnym priorytetem. Nasz zespół jest wyposażony w wiedzę i      umiejętności niezbędne do zapewnienia bezpiecznych treningów.'
                },
                {
                    name: 'Trenerzy',
                    description: 'Nasz zespół trenerski składa się z najlepszych specjalistów w branży, którzy posiadają wiedzę, umiejętności i doświadczenie niezbędne do nauczania squasha na najwyższym poziomie.',
                },
                {
                    name: 'Atmosfera',
                    description: 'U nas, nie tylko skupiamy się na nauce i doskonaleniu umiejętności, ale również na stworzeniu przyjaznej i pełnej energii atmosfery, aby każdy mógł czerpać radość z gry i czuć się komfortowo podczas treningów.',
                },
                {
                    name: 'Metody nauczania',
                    description: 'Stosujemy najnowocześniejsze metody nauczania, aby zapewnić, że nasze treningi są jak najbardziej efektywne i przyjemne.'
                },
                {
                    name: 'Pełne zaangażowanie',
                    description: 'Nasz zespół jest pełen energii i zaangażowania, a nasze treningi są prowadzone z pasją do gry.',
                },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>