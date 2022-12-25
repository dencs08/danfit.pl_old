<template>

    <div class="h-10 space-x-4 flex justify-end items-center">
        <Button class="btn-xs hidden sm:block mb-4">Wyświetl moje treningi</Button>
    </div>

    <div class="lg:flex lg:h-full lg:flex-col">
        <header class="flex items-center justify-between border-b border-gray-200 xl:flex-none mb-0">
            <div class="relative sm:flex justify-center items-end sm:space-x-3 mb-3">
                <div class="flex-row">
                    <div class="text-xs mb-1">Wybierz datę:</div>
                    <Button class="btn-xs" @click="showCalendar">
                        <div class="flex justify-center space-x-2">
                            <span>31.12.2022</span>
                            <Icon icon="material-symbols:calendar-month" width="20px" class="inline" />
                        </div>
                    </Button>
                    <div>
                        <Transition name="fade" mode="out-in">
                            <div v-if="dayCalendarShow"
                                class="absolute top-[120%] left-[50%] translate-x-[-50%] opacity-1 block z-[99] min-w-[100%] sm:min-w-[350px] 2xl:w-[20vw]">
                                <div
                                    class="p-2 bg-white border-1 border-primaryBlack rounded-2xl border border-gray-300 shadow-xl">
                                    <MonthCalendar />
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>


                <div>
                    <select id="location" name="location"
                        class="mt-1 block w-full rounded-full border-gray-300 py-2 pl-3 pr-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm">
                        <option selected>Zielona góra</option>
                        <option>Legnica</option>
                    </select>
                </div>
            </div>
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

        <!-- Calendar -->
        <div class="overflow-x-auto min-h-full px-[2px]">
            <div
                class="shadow mb-1 ring-1 ring-black ring-opacity-5 xl:flex xl:flex-auto xl:flex-col w-[250vw] sm:w-[150vw]  lg:w-auto">
                <div
                    class="grid grid-cols-calendar gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 xl:flex-none">
                    <div class="bg-white py-2">Trener</div>
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

                <!-- Desktop -->
                <div v-for="coach in coaches" :key="coach.name"
                    class="hidden w-full min-h-[10vh] xl:grid xl:grid-cols-calendar">
                    <div class="text-gray-700 text-sm grid place-content-center text-center">
                        <p class="-rotate-90">{{ coach.name }}</p>
                    </div>
                    <div v-for="hour in coach.hours" :key="hour.index" class="" :class="[
                        (hour.isBooked && !hour.lookingFor) ? 'bg-red-500 cursor-default hover:bg-red-500' : 'bg-gray-50 text-gray-800 cursor-pointer',
                        hour.isClosed ? 'bg-gray-400 hover:bg-gray-400 cursor-default' : '',
                        hour.myBooked ? 'bg-emerald-600 hover:bg-emerald-700 cursor-pointer' : '',
                        (!hour.isClosed && hour.isBooked && hour.lookingFor || !hour.isBooked && !hour.myBooked && !hour.isClosed) ? 'hover:bg-gray-200' : '',
                        'relative py-1 px-2 border-[1px] border-gray-200 border-opacity-50',
                    ]">
                        <!-- <time :datetime="hour.date"
                                class="flex h-6 w-6 items-center justify-center rounded-full font-semibold text-gray-800">
                                {{ hour.date }}
                            </time> -->
                        <div v-if="hour.people.length > 0 && hour.lookingFor"
                            class="flex justify-between text-xs h-[75%]" data-bs-toggle="tooltip"
                            data-bs-placement="top" title="Ci gracze szukają kogoś do gry, zapisz się!">
                            <ol>
                                <li v-for="person in hour.people.slice(0, 3)" :key="person.id">
                                    <p class="flex-auto truncate textxs font-medium text-gray-700">
                                        {{ person.name }}
                                    </p>
                                </li>
                                <span v-if="hour.people.length > 3" class="text-gray-500">
                                    +
                                    {{ hour.people.length - 3 }}
                                    więcej
                                </span>
                            </ol>
                            <div>
                                <div class="flex items-center space-x-1 text-sm">
                                    <Icon icon="material-symbols:search-rounded" width="15px" />
                                    <span>{{ hour.lookingFor }}</span>
                                </div>
                            </div>
                        </div>
                        <div v-if="hour.myBooked"
                            class="grid place-content-center text-center font-medium h-[75%] text-white">
                            <Icon icon="material-symbols:check-circle" width="15px" class="mx-auto mb-1" />
                            <p class="text-xs">Jesteś zapisany!</p>
                        </div>
                        <div v-if="hour.location && hour.myBooked || hour.location && hour.lookingFor"
                            class="h-[25%] text-xs"
                            :class="[hour.myBooked ? 'text-white text-center' : 'flex justify-end items-end']">
                            <span>{{ hour.location }}</span>
                            <Icon icon="ci:location" width="15px" class="inline" />
                        </div>
                    </div>
                </div>

                <!-- Mobile -->
                <div v-for="coach in coaches" class="isolate grid w-full grid-cols-calendar grid-rows-1 xl:hidden">
                    <div class="text-gray-700 text-sm grid place-content-center text-center">
                        <p class="-rotate-90">{{ coach.name }}</p>
                    </div>
                    <button v-for="hour in coach.hours" :key="hour.index" type="button" :class="[
                    (hour.isBooked && !hour.lookingFor) ? 'bg-red-500 cursor-default hover:bg-red-500' : 'bg-gray-50 text-gray-800  cursor-pointer',
                    hour.isClosed ? 'bg-gray-400 hover:bg-gray-400 cursor-default' : '',
                    hour.myBooked ? 'bg-emerald-600 hover:bg-emerald-700 cursor-pointer' : '',
                    (!hour.isClosed && hour.isBooked && hour.lookingFor || !hour.isBooked && !hour.myBooked && !hour.isClosed) ? 'hover:bg-gray-200' : '',
                    'flex h-20 flex-col py-1 px-2 focus:z-10 border border-gray-200 border-opacity-50']">
                        <!-- <time :datetime="hour.date" :class="[
                            'flex h-6 w-6 items-center justify-center rounded-full',
                        ]">
                            {{ hour.date }}
                        </time> -->
                        <span class="sr-only">{{ hour.people.length }} people</span>
                        <div v-if="hour.people.length > 0 && hour.lookingFor" class="h-[75%]">
                            <div class="flex items-center space-x-1">
                                <Icon icon="material-symbols:search-rounded" width="15px" />
                                <span>{{ hour.lookingFor }}</span>
                            </div>
                            <span class="-mx-0.5 flex flex-wrap-reverse xl:h-full mt-2">
                                <span v-for="person in hour.people" :key="person.id"
                                    class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                            </span>
                        </div>
                        <div v-if="hour.myBooked"
                            class="grid place-content-center h-full w-full text-center font-medium">
                            <Icon icon="material-symbols:check-circle" width="15px" class="text-white" />
                        </div>
                        <div v-if="hour.location && hour.myBooked || hour.location && hour.lookingFor"
                            class="h-[25%] text-xs flex justify-end items-end"
                            :class="[hour.myBooked ? 'text-white' : '']">

                            <span>{{ hour.location }}</span>
                            <Icon icon="ci:location" width="15px" class="inline" />
                        </div>
                    </button>
                </div>

            </div>
        </div>

    </div>
</template>
  
<script lang='ts'>
import { Icon } from '@iconify/vue';
import { MonthCalendar, Button } from '../components';

export default {
    components: {
        Icon,
        MonthCalendar,
        Button
    },

    data() {
        return {
            coaches: [
                {
                    name: 'Trener1',
                    hours: [
                        { index: '1', isBooked: true, isClosed: false, myBooked: false, location: '', people: [] },
                        { index: '2', people: [], isBooked: false, isClosed: false, myBooked: false, location: '' },
                        { index: '3', people: [], isBooked: false, isClosed: false, myBooked: false, location: '' },
                        { index: '4', isBooked: true, isClosed: false, myBooked: false, location: '', people: [] },

                        { index: '5', isBooked: false, people: [], myBooked: true, location: 'Hasta', isClosed: false },
                        {
                            index: '6',
                            isBooked: true,
                            isClosed: false, myBooked: false,
                            people: [
                                { id: 1, name: 'Jan', href: '#' },
                                { id: 2, name: 'Daniel', href: '#' },
                                { id: 3, name: 'Test', href: '#' },
                            ],
                            location: 'CRS'
                        },
                        { index: '7', isBooked: true, people: [], isClosed: false, myBooked: false, location: '', },
                        {
                            index: '8',
                            isBooked: true,
                            lookingFor: 0,
                            isClosed: false, myBooked: false,
                            people: [
                                { id: 1, name: 'Jan', href: '#' },
                                { id: 2, name: 'Daniel', href: '#' },
                                { id: 3, name: 'Test', href: '#' },
                            ],
                            location: 'Grape'
                        },
                        { index: '9', isBooked: false, people: [], myBooked: false, location: 'Hasta', isClosed: false },
                        { index: '10', isBooked: true, people: [], isClosed: false, myBooked: false, location: '', },
                        { index: '11', isBooked: true, people: [], isClosed: false, myBooked: false, location: '', },
                        {
                            index: '12',
                            isBooked: true,
                            isClosed: false, myBooked: false,
                            people: [{ id: 3, name: 'Jan', href: '#' }],
                            location: 'CRS'
                        },
                        {
                            index: '13',
                            isBooked: true,
                            lookingFor: 1,
                            isClosed: false, myBooked: false,
                            people: [
                                { id: 1, name: 'Jan', href: '#' },
                                { id: 2, name: 'Daniel', href: '#' },
                                { id: 3, name: 'Test', href: '#' },
                            ],
                            location: 'Grape'
                        },
                        {
                            index: '14',
                            isBooked: false,
                            isClosed: false, myBooked: false, location: '',
                            people: [
                            ],
                        },
                    ]
                },

                {
                    name: 'Trener2',
                    hours: [
                        { index: '1', isBooked: true, isClosed: false, myBooked: false, location: '', people: [] },
                        { index: '2', people: [], isBooked: false, isClosed: false, myBooked: false, location: '' },
                        { index: '3', people: [], isBooked: false, isClosed: false, myBooked: false, location: '' },
                        { index: '4', isBooked: true, isClosed: false, myBooked: false, location: '', people: [] },
                        {
                            index: '5',
                            isBooked: true,
                            isClosed: false, myBooked: false,
                            people: [
                                { id: 1, name: 'Jan', href: '#' },
                                { id: 2, name: 'Daniel', href: '#' },
                                { id: 3, name: 'asd', href: '#' },
                            ],
                            location: 'Hasta'
                        },
                        {
                            index: '6',
                            isBooked: true,
                            isClosed: false, myBooked: false,
                            people: [
                                { id: 1, name: 'Jan', href: '#' },
                                { id: 2, name: 'Daniel', href: '#' },
                                { id: 3, name: 'Test', href: '#' },
                            ],
                            location: 'CRS'
                        },
                        { index: '7', isBooked: true, people: [], isClosed: false, myBooked: false, location: '', },
                        {
                            index: '8',
                            isBooked: true,
                            lookingFor: 0,
                            isClosed: false, myBooked: false,
                            people: [
                                { id: 1, name: 'Jan', href: '#' },
                                { id: 2, name: 'Daniel', href: '#' },
                                { id: 3, name: 'Test', href: '#' },
                                { id: 4, name: 'asd', href: '#' },
                            ],
                            location: 'Grape'
                        },
                        { index: '9', isBooked: true, people: [], myBooked: true, location: 'Hasta', isClosed: false },
                        { index: '10', isBooked: true, people: [], isClosed: false, myBooked: false, location: '', },
                        { index: '11', isBooked: true, people: [], isClosed: false, myBooked: false, location: '', },
                        {
                            index: '12',
                            isBooked: true,
                            isClosed: false, myBooked: false,
                            people: [{ id: 3, name: 'Jan', href: '#' }],
                            location: 'CRS'
                        },
                        {
                            index: '13',
                            isClosed: false, myBooked: false,
                            isBooked: true,
                            people: [{ id: 6, name: "Jan", href: '#' }],
                            location: 'CRS'
                        },
                        {
                            index: '14',
                            isBooked: false,
                            isClosed: false, myBooked: false, location: '',
                            people: [
                            ],
                        },
                    ]
                },

                {
                    name: 'Trener3',
                    hours: [
                        { index: '1', isBooked: true, isClosed: false, myBooked: false, location: '', people: [] },
                        { index: '2', people: [], isBooked: false, isClosed: false, myBooked: false, location: '' },
                        { index: '3', people: [], isBooked: false, isClosed: false, myBooked: false, location: '' },
                        { index: '4', isBooked: true, isClosed: false, myBooked: false, location: '', people: [] },
                        {
                            index: '5',
                            isBooked: true,
                            isClosed: false, myBooked: false,
                            people: [
                                { id: 1, name: 'Jan', href: '#' },
                                { id: 2, name: 'Daniel', href: '#' },
                                { id: 3, name: 'Test', href: '#' },
                            ],
                            location: 'Hasta'
                        },
                        {
                            index: '6',
                            isBooked: true,
                            isClosed: false, myBooked: false,
                            people: [
                                { id: 1, name: 'Jan', href: '#' },
                                { id: 2, name: 'Daniel', href: '#' },
                                { id: 3, name: 'Test', href: '#' },
                            ],
                            location: 'CRS'
                        },
                        { index: '7', isBooked: true, people: [], isClosed: false, myBooked: false, location: '', },
                        {
                            index: '8',
                            isBooked: true,
                            lookingFor: 0,
                            isClosed: false, myBooked: false,
                            people: [
                                { id: 1, name: 'Jan', href: '#' },
                                { id: 2, name: 'Daniel', href: '#' },
                                { id: 3, name: 'Test', href: '#' },
                            ],
                            location: 'Grape'
                        },
                        { index: '9', isBooked: true, people: [], myBooked: false, location: 'Hasta', isClosed: false },
                        { index: '10', isBooked: true, people: [], isClosed: false, myBooked: false, location: '', },
                        { index: '11', isBooked: true, people: [], isClosed: false, myBooked: false, location: '', },
                        {
                            index: '12',
                            isBooked: true,
                            isClosed: false, myBooked: false,
                            people: [{ id: 3, name: 'Jan', href: '#' }],
                            location: 'CRS'
                        },
                        {
                            index: '13',
                            isClosed: false, myBooked: false,
                            isBooked: true,
                            people: [{ id: 6, name: "Jan", href: '#' }],
                            location: 'CRS'
                        },
                        {
                            index: '14',
                            isBooked: false,
                            isClosed: false, myBooked: false, location: '',
                            people: [
                            ],
                        },
                    ]
                },
            ],
            dayCalendarShow: false,
        }
    },

    methods: {
        showCalendar() {
            this.dayCalendarShow = !this.dayCalendarShow;
        }
    }
}
</script>