<template>
    <div>
        <div
            class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 class="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white">Zacznij trenować razem z nami
            </h2>
            <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Nie ważne, czy masz doświadczenie ze
                squashem lub innymi sportami rakietowymi, my prowadzimy zajęcia dla każdego - niezależnie od Twoich
                umiejętności czy wieku. </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <router-link :to="{ name: 'Calendar' }"
                    class="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Zapisz się
                </router-link>
                <router-link :to="{ name: 'Contact' }" class="text-base font-semibold leading-7 text-white">
                    Kontakt
                    <span class="ml-1" aria-hidden="true">→</span>
                </router-link>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"
                class="absolute top-[25px] left-1/2 -z-10 h-[128rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                    fill-opacity="0.8" />
                <defs>
                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                        <stop stop-color="#00ACD4" />
                        <stop offset="1" stop-color="#003A94" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    </div>
</template>
<script lang="ts">
export default {

}
</script>
<style lang="">
    
</style>