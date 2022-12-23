<template >
    <Disclosure as="div" class="relative overflow-hidden bg-emerald-700 pb-32" v-slot="{ open }">
        <div aria-hidden="true"
            :class="[open ? 'bottom-0' : 'inset-y-0', 'absolute inset-x-0 left-1/2 w-full -translate-x-1/2 transform overflow-hidden lg:inset-y-0']">
            <div class="absolute inset-0 flex">
                <div class="h-full w-1/2" style="background-color: #0a527b" />
                <div class="h-full w-1/2" style="background-color: #065d8c" />
            </div>
            <div class="relative flex justify-center">
                <svg class="flex-shrink-0" width="1750" height="308" viewBox="0 0 1750 308"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M284.161 308H1465.84L875.001 182.413 284.161 308z" fill="#0369a1" />
                    <path d="M1465.84 308L16.816 0H1750v308h-284.16z" fill="#065d8c" />
                    <path d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#0a527b" />
                    <path d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z" fill="#0a4f76" />
                </svg>
            </div>
        </div>
        <header class="relative pt-28 mb-10">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold tracking-tight text-white">Moje konto</h1>
            </div>
        </header>
    </Disclosure>
</template>
<script lang="ts">
import { Disclosure } from '@headlessui/vue'

export default {
    components: {
        Disclosure,
    },

}
</script>
<style lang="">
    
</style>