<template>
    <div class="lg:flex lg:h-full lg:flex-col">
        <header class="flex items-center justify-between border-b border-gray-200 xl:flex-none">
            <h5 class="font-semibold text-gray-900">
                <time datetime="2022-01">31.01.2022 (wtorek)</time>
            </h5>
            <div class="flex items-center mb-2">
                <div class="flex items-center rounded-md shadow-sm md:items-stretch">
                    <button type="button"
                        class="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50">
                        <span class="sr-only">Poprzedni dzień</span>
                        <Icon icon="material-symbols:arrow-back-ios-new" width="15px" class="my-1" />
                    </button>
                    <button type="button"
                        class="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block">Dzisaj</button>
                    <span class="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
                    <button type="button"
                        class="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50">
                        <span class="sr-only">Następny dzień</span>
                        <Icon icon="material-symbols:arrow-forward-ios-rounded" width="15px" class="my-1" />
                    </button>
                </div>
            </div>
        </header>

        <div class="overflow-x-auto min-h-full px-[2px]">
            <div
                class="shadow mb-1 ring-1 ring-black ring-opacity-5 xl:flex xl:flex-auto xl:flex-col w-[200vw] xs:w-[150vw] sm:w-[125vw] md:w-auto">
                <div
                    class="grid grid-cols-14 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 xl:flex-none">
                    <div class="bg-white py-2">8:00</div>
                    <div class="bg-white py-2">9:00</div>
                    <div class="bg-white py-2">10:00</div>
                    <div class="bg-white py-2">11:00</div>
                    <div class="bg-white py-2">12:00</div>
                    <div class="bg-white py-2">13:00</div>
                    <div class="bg-white py-2">14:00</div>
                    <div class="bg-white py-2">15:00</div>
                    <div class="bg-white py-2">16:00</div>
                    <div class="bg-white py-2">17:00</div>
                    <div class="bg-white py-2">18:00</div>
                    <div class="bg-white py-2">19:00</div>
                    <div class="bg-white py-2">20:00</div>
                    <div class="bg-white py-2">21:00</div>
                </div>
                <div class="flex bg-gray-200 text-xs leading-6 text-gray-700 xl:flex-auto">
                    <div class="hidden w-full xl:grid xl:grid-cols-14 xl:grid-rows-3 xl:gap-px">
                        <div v-for="hour in hours" :key="hour.date" class="" :class="[
                            (hour.isBooked && !hour.lookingFor) ? 'bg-red-500 cursor-default hover:bg-red-500' : 'bg-gray-50 text-gray-800 cursor-pointer',
                            hour.isClosed ? 'bg-gray-400 hover:bg-gray-400 cursor-default' : '',
                            hour.myBooked ? 'bg-emerald-600 hover:bg-emerald-700 cursor-pointer' : '',
                            (!hour.isClosed && hour.isBooked && hour.lookingFor || !hour.isBooked && !hour.myBooked && !hour.isClosed) ? 'hover:bg-gray-200' : '',
                            'relative py-1 px-2',
                        ]">
                            <!-- <time :datetime="hour.date"
                            class="flex h-6 w-6 items-center justify-center rounded-full font-semibold text-gray-800">
                            {{ hour.date }}
                        </time> -->
                            <div v-if="hour.people.length > 0 && hour.lookingFor" class="flex justify-between"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Ci gracze szukają kogoś do gry, zapisz się!">
                                <ol>
                                    <li v-for="human in hour.people.slice(0, 2)" :key="human.id">
                                        <p class="flex-auto truncate font-medium text-gray-900">
                                            {{ human.name }}
                                        </p>
                                    </li>
                                    <li v-if="hour.people.length > 2" class="text-gray-500">+ {{ hour.people.length - 2
                                    }}
                                        więcej
                                    </li>
                                </ol>
                                <div>
                                    <div class="flex items-center space-x-1">
                                        <Icon icon="material-symbols:search-rounded" width="15px" />
                                        <span>{{ hour.lookingFor }}</span>
                                    </div>
                                </div>
                            </div>
                            <div v-if="hour.myBooked"
                                class="grid place-content-center h-full w-full text-center font-medium text-white">
                                <Icon icon="material-symbols:check-circle" width="15px" class="mx-auto" />
                                <p>Jesteś zapisany!</p>
                            </div>
                        </div>
                    </div>

                    <div class="isolate grid w-full grid-cols-14 grid-rows-3 gap-px xl:hidden">
                        <button v-for="hour in hours" :key="hour.date" type="button" :class="[
                        (hour.isBooked && !hour.lookingFor) ? 'bg-red-500 cursor-default hover:bg-red-500' : 'bg-gray-50 text-gray-800  cursor-pointer',
                        hour.isClosed ? 'bg-gray-400 hover:bg-gray-400 cursor-default' : '',
                        hour.myBooked ? 'bg-emerald-600 hover:bg-emerald-700 cursor-pointer' : '',
                        (!hour.isClosed && hour.isBooked && hour.lookingFor || !hour.isBooked && !hour.myBooked && !hour.isClosed) ? 'hover:bg-gray-200' : '',
                        'flex h-20 flex-col py-1 px-2 focus:z-10']">
                            <!-- <time :datetime="hour.date" :class="[
                            'flex h-6 w-6 items-center justify-center rounded-full',
                        ]">
                            {{ hour.date }}
                        </time> -->
                            <span class="sr-only">{{ hour.people.length }} people</span>
                            <div v-if="hour.people.length > 0 && hour.lookingFor" class="md:h-[75%]">
                                <div class="flex items-center space-x-1">
                                    <Icon icon="material-symbols:search-rounded" width="15px" />
                                    <span>{{ hour.lookingFor }}</span>
                                </div>
                                <span class="-mx-0.5 flex flex-wrap-reverse xl:h-full mt-2">
                                    <span v-for="human in hour.people" :key="human.id"
                                        class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                                </span>
                            </div>
                            <div v-if="hour.myBooked"
                                class="grid place-content-center h-full w-full text-center font-medium">
                                <Icon icon="material-symbols:check-circle" width="15px" class="text-white" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script setup lang='ts'>

import { Icon } from '@iconify/vue';

const hours = [
    { date: '', people: [] },
    { date: '', people: [] },
    { date: '', people: [] },
    { date: '', isClosed: true, people: [] },
    { date: '', isClosed: true, people: [] },
    {
        date: '', isBooked: true, people: [
            { id: 1, name: 'Daniel', href: '#' },
            { id: 2, name: 'Wiktoria', href: '#' },
            { id: 3, name: 'Angela', href: '#' },
        ],
    },
    { date: '', isBooked: true, people: [] },
    {
        date: '',
        isBooked: true,
        lookingFor: 1,
        people: [
            { id: 1, name: 'Daniel', href: '#' },
            { id: 2, name: 'Wiktoria', href: '#' },
            { id: 3, name: 'Angela', href: '#' },
        ],
    },
    { date: '', isBooked: false, people: [], myBooked: true, },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    {
        date: '',
        isBooked: true,
        people: [{ id: 3, name: 'Daniel', href: '#' }],
    },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    {
        date: '',
        isBooked: true,
        people: [{ id: 6, name: "Wiktoria", href: '#' }],
    },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    {
        date: '',
        isBooked: true,
        people: [
            { id: 4, name: 'Daniel', href: '#' },
            { id: 5, name: 'Wiktoria', href: '#' },
            { id: 6, name: 'Angela', href: '#' },
        ],
    },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', isBooked: true, people: [] },
    { date: '', people: [] },
    { date: '', people: [] },
    {
        date: '',
        lookingFor: 2,
        isBooked: true,
        people: [{ id: 7, name: 'Daniel', href: '#' }],
    },
    { date: '', people: [] },
    { date: '', people: [] },
    { date: '', people: [] },
]
</script>