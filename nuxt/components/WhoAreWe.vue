
<template>
    <div class="container">
        <div class="relative py-10">
            <div class="lg:mx-auto lg:grid lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
                <div class="relative sm:py-16 lg:py-0">
                    <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                        <div class="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
                        <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404"
                            height="392" fill="none" viewBox="0 0 404 392">
                            <defs>
                                <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20"
                                    patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                        </svg>
                    </div>
                    <div class="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
                        <!-- Testimonial card-->
                        <div class="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                            <img class="absolute inset-0 h-full w-full object-cover" src="../assets/img/ceo_photo.jpg"
                                alt="" />
                            <div class="absolute inset-0 bg-cyan-500 mix-blend-multiply" />
                            <div class="absolute inset-0 bg-gradient-to-t from-emerald-600 via-cyan-600 opacity-70" />
                            <div class="relative px-8">
                                <div>
                                    <img class="h-7" src="../assets/img/logos/danfit_logo_white.svg" alt="danfit" />
                                </div>
                                <blockquote class="mt-8">
                                    <div class="relative text-lg font-medium text-white md:flex-grow">
                                        <svg class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-cyan-400"
                                            fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                            <path
                                                d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                        </svg>
                                        <p class="relative">Chcemy inspirować i wspierać wszystkich, bez względu na wiek
                                            czy poziom zaawansowania, w osiąganiu ich fitnessowych celów poprzez
                                            najlepszej jakości treningi squasha oraz oferowanie niepowtarzalnej i pełnej
                                            energii atmosfery, aby każdy mógł czerpać radość z gry i czuć się lepiej.
                                        </p>
                                    </div>

                                    <footer class="mt-4">
                                        <p class="text-base font-semibold text-indigo-200">Daniel Buzon - Danfit CEO</p>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
                    <!-- Content area -->
                    <div class="pt-12 sm:pt-16 lg:pt-20">
                        <h3 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kim jesteśmy?</h3>
                        <div class="mt-6 space-y-6 text-gray-500">
                            <p class="text-lg">Danfit to akademia squasha, która oferuje szeroką gamę treningów
                                dostosowanych do potrzeb i poziomu zaawansowania każdego zawodnika. Naszym celem jest
                                zapewnienie najlepszej jakości usług i doświadczeń dla naszych klientów, a także
                                zapewnienie bezpieczeństwa i komfortu podczas każdego treningu.</p>
                            <p class="text-base leading-7">Nasz zespół składa się z wykwalifikowanych i doświadczonych
                                trenerów squasha, którzy posiadają wiedzę i umiejętności niezbędne do prowadzenia
                                profesjonalnych treningów. Dzięki ich zaangażowaniu i pasji, nasz zespół jest w stanie
                                zapewnić każdemu zawodnikowi niepowtarzalne i pełne energii doświadczenie na korcie.
                                Jesteśmy zjednoczeni w naszej misji, aby pomagać wszystkim w osiąganiu ich fitnessowych
                                celów i czerpaniu radości z gry w squasha.</p>
                        </div>
                    </div>

                    <!-- Stats section -->
                    <div class="mt-10">
                        <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
                            <div v-for="stat in stats" :key="stat.label" class="border-t-2 border-gray-100 pt-6">
                                <dt class="text-base font-medium text-gray-500">{{ stat.label }}</dt>
                                <dd class="text-3xl font-bold tracking-tight text-gray-900">{{ stat.value }}</dd>
                            </div>
                        </dl>
                        <div class="mt-10">
                            <NuxtLink :to="{ name: 'Contact' }" class="text-base font-medium text-indigo-600">
                                Napisz do nas o współpracę
                                <span aria-hidden="true"> &rarr;</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
            stats: [
                { label: 'Założenie', value: '2020' },
                { label: 'Trenerów', value: '4' },
                { label: 'Klientów', value: '+500' },
                { label: 'Treningów', value: '+12000' },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>