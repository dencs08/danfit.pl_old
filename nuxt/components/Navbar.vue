<template>
    <Popover class="fixed z-[999] bg-white-primary shadow-md">
        <div class="relative mx-auto max-w-[95%] sm:max-w-[98%] w-screen">
            <div
                class="flex items-center justify-between min-h-[55px] lg:h-[8.5vh] max-h-[80px] lg:justify-start lg:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <NuxtLink to="/start" class="mr-10">
                        <img :src="logo" class="min-w-[30px] lg:w-[1.75vw] max-w-[40px]" alt="danfit logo">
                    </NuxtLink>
                </div>
                <div class="-my-2 -mr-2 lg:hidden">
                    <PopoverButton
                        class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                        <span class="sr-only">Open menu</span>
                        <Icon icon="radix-icons:hamburger-menu" />
                    </PopoverButton>
                </div>
                <PopoverGroup as="nav" class="hidden space-x-10 lg:flex">
                    <NuxtLink v-for="link in mainMenu" :to="{ name: link.to }" :underline="false" :black="true">{{
                        link.name
                    }}</NuxtLink>
                </PopoverGroup>
                <div class="hidden items-center justify-end lg:flex lg:flex-1 lg:w-0 space-x-4">
                    <NuxtLink :to="{ name: 'Login' }"
                        class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Zaloguj
                        się
                    </NuxtLink>
                    <NuxtLink :to="{ name: 'Register' }">
                        <Button size="xs">Zarejestruj się</Button>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden">
                <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="px-5 pt-5 pb-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <NuxtLink to="/start">
                                    <img :src="logo" class="min-w-[25px]" alt="danfit logo">
                                </NuxtLink>
                            </div>
                            <div class="-mr-2">
                                <PopoverButton
                                    class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span class="sr-only">Close menu</span>
                                    <Icon icon="mingcute:close-line" width="20px" class="inline" />
                                </PopoverButton>
                            </div>
                        </div>
                        <div class="mt-6">
                            <nav class="grid gap-y-6">
                                <Link v-for="link in mainMenu" :to="{ name: link.to }" :underline="false" :black="true">
                                <Icon :icon="link.icon" width="20px" class="inline" />
                                <span class="ml-3 text-base font-medium text-gray-900">{{ link.name }}</span>
                                </Link>
                            </nav>
                        </div>
                    </div>
                    <div class="space-y-6 py-6 px-5">
                        <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                            <NuxtLink v-for="item in resources" :key="item.name" :to="{ name: item.to }"
                                class="text-base font-medium text-gray-900 hover:text-gray-700">{{
                                    item.name
                                }}</NuxtLink>
                        </div>
                        <div>
                            <NuxtLink :to="{ name: 'Register' }" class="w-screen">
                                <Button class="w-full" size="sm">Zarejestruj się</Button>
                            </NuxtLink>
                            <p class="mt-6 text-center text-base font-medium text-gray-500">
                                Masz już konto?
                                {{ ' ' }}
                                <NuxtLink class="text-indigo-600 hover:text-indigo-500" :to="{ name: 'Login' }">
                                    Zaloguj się
                                </NuxtLink>
                            </p>
                        </div>
                    </div>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script lang="ts">
// import { Icon } from '@iconify/vue';

import logo from '../assets/img/logos/danfit_logotype_black.svg';

import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'

export default defineComponent({
    components: {
        Popover, PopoverButton, PopoverGroup, PopoverPanel
    },
    data() {
        return {
            logo: logo,
            isMenuOpen: false,
            mainMenu: [
                { name: 'Start', to: 'Start', icon: 'material-symbols:home' },
                { name: 'Oferta', to: 'Offer', icon: 'material-symbols:sports-tennis' },
                { name: 'O nas', to: 'AboutUs', icon: 'material-symbols:groups' },
                { name: 'Kontakt', to: 'Contact', icon: 'material-symbols:mail-rounded' },
                { name: 'Rezerwacje', to: 'Calendar', icon: 'material-symbols:calendar-month' }
            ],

            resources: [
                { name: 'Wydarzenia', to: 'Start', },
                { name: 'Polityka prywatności', to: 'Privacy', },
                { name: 'Warunki korzystania', to: 'Terms', },
                { name: 'Najczęstsze pytania', to: 'Contact' },
            ],

        }
    }
})
</script>
<style lang="scss"></style>