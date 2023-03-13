<template>
    <section class="flex min-h-screen flex-col pt-16 pb-12">
        <div class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
            <div class="flex flex-shrink-0 justify-center">
                <NuxtLink to="/" class="inline-flex">
                    <span class="sr-only">danfit</span>
                    <img class="h-8 w-auto" src="../assets/logos/danfit_blue_logo_full_color.svg" alt="" />
                </NuxtLink>
            </div>
            <div class="py-8">
                <div class="text-center">
                    <p class="font-semibold text-indigo-600">404</p>
                    <h1 class="mt-2 font-bold tracking-tight text-gray-900 sm:text-5xl">Nie znaleziono strony.
                    </h1>
                    <p class="mt-2 text-gray-500">Ups! Nie udało nam znaleźć się strony na, którą próbujesz
                        wejść.
                    </p>
                    <div class="mt-6">
                        <NuxtLink to="/" class="font-medium text-indigo-600 hover:text-indigo-500">
                            Wróć na stronę główną
                            <span aria-hidden="true"> &rarr;</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
export default {

}
</script>
<style lang="">
    
</style>