<template>
    <section class="relative z-10 mx-auto -mt-32" aria-labelledby="contact-heading">
        <h2 class="sr-only" id="contact-heading">Contact us</h2>
        <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-5 lg:gap-x-8">
            <div v-for="link in supportLinks" :key="link.name" class="flex flex-col rounded-2xl bg-white shadow-xl">
                <div class="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                    <div
                        class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-blue-600 p-4 shadow-lg">
                        <Icon :icon="link.icon" class="h-7 w-7 text-white" aria-hidden="true" />
                    </div>
                    <h3 class="text-xl font-medium text-gray-900">{{ link.name }}</h3>
                    <p class="mt-4 text-base text-gray-500">{{ link.description }}</p>
                </div>
                <div class="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                    <router-link :to="{ name: 'Contact' }"
                        class="text-base font-medium text-blue-700 hover:text-blue-600">Kontakt
                        <span aria-hidden="true"> &rarr;</span>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { Icon } from '@iconify/vue'
export default {
    components: {
        Icon
    },
    data() {
        return {
            supportLinks: [
                {
                    name: 'Dla dzieci',
                    to: 'Contact',
                    description: 'Rozpocznij przygodę z squashem już od najmłodszych lat - specjalnie dostosowane treningi dla dzieci!',
                    icon: 'ph:baby-fill',
                },
                {
                    name: 'Dla dorosłych',
                    to: 'Contact',
                    description: 'Zwiększ swoje umiejętności i zrób krok w kierunku squasha - treningi dla dorosłych na najwyższym poziomie.',
                    icon: 'mdi:account-tie'
                },
                {
                    name: 'Indywidualne',
                    to: 'Contact',
                    description: 'Skup się na swoim rozwoju i dostosuj trening do własnych potrzeb - treningi indywidualne to idealne rozwiązanie dla tych, którzy chcą osiągnąć swój cel szybciej.',
                    icon: 'material-symbols:person'
                },
                {
                    name: 'Grupowe',
                    to: 'Contact',
                    description: 'Dołącz do grupy i baw się dobrze podczas treningu - treningi grupowe to nie tylko doskonała okazja do rozwoju, ale też do zawierania nowych znajomości.',
                    icon: 'material-symbols:groups-2-rounded'
                },
                {
                    name: 'W parach',
                    to: 'Contact',
                    description: 'Graj z partnerem i zmień swoją rutynę treningową treningi w parach to świetna zabawa i doskonały trening.',
                    icon: 'material-symbols:group'
                },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>