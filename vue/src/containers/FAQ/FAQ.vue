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
            <div class="grid grid-cols-1 gap-10 md:gap-16 lg:grid-cols-3">
                <div v-for="column in columns" class="space-y-10 md:space-y-16">
                    <div v-for="element in column">
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
                    { question: 'Gdzie prowadzone są treningi?', answer: 'Zajęcia prowadzimy na całym terenie Zielonej Góry, kiedy rezerwujesz trening zaznacz miejsce treningu a następnie poczekaj na potwierdzenie od trenera.' },
                    { question: 'Co wziąć ze sobą?', answer: 'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod, sed do e sit amet, consectetur, sed do eiusmod, sed do e sit amet, consectetur, sed do eiusmod, sed do e.' }
                ],
                [
                    { question: 'Ile trwają zajęcia?', answer: 'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod, sed do e sit amet, consectetur, sed do eiusmod, sed do e sit amet, consectetur, sed do eiusmod, sed do e.' },
                    { question: 'Kiedy mogę odrezerwować trening?', answer: 'Aby bezkosztowo odrezerwować trening należy to zrobić conajmniej 1 dzień przed treningiem.' }
                ],
                [
                    { question: 'Jaki jest koszt zajęć?', answer: 'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod, sed do e sit amet, consectetur, sed do eiusmod, sed do e sit amet, consectetur, sed do eiusmod, sed do e.' },
                    { question: 'Dlaczego nie mogę zarezerwować treningu?', answer: 'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod, sed do e sit amet, consectetur, sed do eiusmod, sed do e sit amet, consectetur, sed do eiusmod, sed do e.' }
                ]
            ]
        }
    }
}
</script>

<style lang="scss">

</style>