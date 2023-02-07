<template>
    <section>
        <div class="container">
            <div class="mb-10 md:mb-12">
                <div>
                    <p
                        class="inline-block mb-4 font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        FAQ
                    </p>
                </div>
                <h3 class="mb-6 font-bold leading-none tracking-tight">
                    Najczęsciej <TextGradient>zadawane pytania</TextGradient>
                </h3>
            </div>
        </div>
        <div class="container">
            <div class="grid grid-cols-1 gap-10 lg:gap-16 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="column in columns" class="space-y-12 lg:space-y-16">
                    <div v-for="element in column" class="lg:min-h-[150px]">
                        <h6 class="mb-1 lg:mb-4">
                            {{ element.question }}
                        </h6>
                        <p class="text-gray-700">
                            {{ element.answer }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { TextGradient } from '../../components';
export default {
    components: {
        TextGradient
    },
    data() {
        return {
            columns: [
                [
                    { question: 'Gdzie prowadzone są treningi?', answer: 'Zajęcia prowadzimy w kilku miastach w Polsce, kiedy rezerwujesz trening zaznacz miejsce treningu a następnie poczekaj na potwierdzenie od trenera.' },
                    { question: 'Co wziąć ze sobą?', answer: 'W większości przypadków wystarczą Ci buty halowe (nierysujące podłoża) i strój na przebranie, może zdarzyć się jednak, że klub (lub trener) nie jest wyposażony w rakiety - w takim wypadku musisz mieć również swoją rakiete.' }
                ],
                [
                    { question: 'Ile trwają zajęcia?', answer: 'Każdy trener sam ustala ile będą trwały jego zajęcia - zazwyczaj jednak jest to 1 godzina.' },
                    { question: 'Kiedy mogę odrezerwować trening?', answer: 'Aby bezkosztowo odrezerwować trening należy to zrobić conajmniej 1 dzień przed treningiem. W wyjątkowych przypadkach za porozumieniem z trenerem można zrobić to bez kosztów niezależnie od terminu odwołania.' }
                ],
                [
                    { question: 'Jaki jest koszt zajęć?', answer: 'Koszt zajęć uzależniony jest od kilku czynników, typ treningu, jego godzina, czas, region.W naszym systemie rezerwacji z góry wiesz ile zapłacisz - wystarczy wybrać trening i sprawdzić ile będzie on nas kosztował.' },
                    // { question: 'Dlaczego nie mogę zarezerwować treningu?', answer: '' }
                ]
            ]
        }
    }
}
</script>

<style lang="scss">

</style>