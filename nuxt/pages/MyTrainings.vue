<template>
    <div>
        <h6>Moje treningi</h6>
        <p>Tutaj znajdziesz treningi na, które jesteś zapisany.</p>

        <ol class="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
            <li v-for="meeting in meetings" :key="meeting.id" class="relative flex space-x-6 py-6 xl:static">
                <div class="flex-auto">
                    <div class="space-y-1">
                        <span class="text-xs">trener:</span>
                        <h4 class="pr-10 font-semibold text-gray-800 xl:pr-0">{{ meeting.name }}</h4>
                    </div>
                    <dl class="mt-2 flex flex-col text-gray-500 xl:flex-row">
                        <div class="flex items-start space-x-3">
                            <dt class="mt-0.5">
                                <span class="sr-only">Date</span>
                                <CalendarIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd>
                                <time :datetime="meeting.datetime">{{ meeting.date }} o {{ meeting.time }}</time>
                            </dd>
                        </div>
                        <div
                            class="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                            <dt class="mt-0.5">
                                <span class="sr-only">Miejsce</span>
                                <MapPinIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd>{{ meeting.location }}</dd>
                        </div>
                    </dl>
                </div>
                <Menu as="div" class="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center">
                    <div>
                        <MenuButton class="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
                            <span class="sr-only">Open options</span>
                            <EllipsisHorizontalIcon class="h-5 w-5" aria-hidden="true" />
                        </MenuButton>
                    </div>

                    <transition enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                        <MenuItems
                            class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Poproś
                                    o zmianę</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Odrezerwuj</a>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>
            </li>
        </ol>

        <nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-6">
            <div class="-mt-px flex w-0 flex-1">
                <a href="#"
                    class="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    Cofnij
                </a>
            </div>
            <div class="hidden md:-mt-px md:flex">
                <a href="#"
                    class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">1</a>
                <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                <a href="#"
                    class="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
                    aria-current="page">2</a>
                <a href="#"
                    class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">3</a>
                <span
                    class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">...</span>
                <a href="#"
                    class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">8</a>
                <a href="#"
                    class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">9</a>
                <a href="#"
                    class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">10</a>
            </div>
            <div class="-mt-px flex w-0 flex-1 justify-end">
                <a href="#"
                    class="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    Dalej
                </a>
            </div>
        </nav>
    </div>
</template>
<script lang="ts">
import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    EllipsisHorizontalIcon,
    MapPinIcon,
} from '@heroicons/vue/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

definePageMeta({
    layout: 'account'
})

export default {
    components: {
        CalendarIcon,
        ChevronLeftIcon,
        ChevronRightIcon,
        EllipsisHorizontalIcon,
        MapPinIcon,
        Menu, MenuButton, MenuItem, MenuItems
    },
    data() {
        return {
            meetings: [
                {
                    id: 1,
                    date: '10 styczeń 2022',
                    time: '16:00',
                    datetime: '2022-01-10T17:00',
                    name: 'Jan Kowal',
                    location: 'CRS Zielona Góra',
                },
                {
                    id: 2,
                    date: '10 styczeń 2022',
                    time: '16:00',
                    datetime: '2022-01-10T17:00',
                    name: 'Jan Kowal',
                    location: 'CRS Zielona Góra',
                },
                {
                    id: 3,
                    date: '10 styczeń 2022',
                    time: '16:00',
                    datetime: '2022-01-10T17:00',
                    name: 'Jan Kowal',
                    location: 'CRS Zielona Góra',
                },
                // More meetings...
            ]
        }
    },

    methods: {

    }
}
</script>
<style lang="">
    
</style>