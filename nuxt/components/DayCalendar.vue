<template>
    <Modal ref="Modal" />

    <div class="h-10 space-x-4 flex justify-end items-center">
        <router-link :to="{ name: 'MyTrainings' }">
            <Button size="xs" class="hidden sm:block mb-4">Wyświetl moje treningi</Button>
        </router-link>
    </div>

    <div class="lg:flex lg:h-full lg:flex-col">
        <!-- Calendar Header -->
        <header class="flex items-center justify-between border-b border-gray-200 xl:flex-none mb-0">
            <div class="relative sm:flex justify-center items-end sm:space-x-3 mb-3">
                <div class="flex-row">
                    <div class="text-xs mb-1">Wybierz datę:</div>
                    <Button size="xs" @click="showCalendar">
                        <div class="flex justify-center space-x-2">
                            <span>31.12.2022</span>
                            <Icon name="material-symbols:calendar-month" width="20px" class="inline" />
                        </div>
                    </Button>
                    <div>
                        <Transition name="fade" mode="out-in">
                            <div v-if="dayCalendarShow"
                                class="absolute top-[120%] left-[100%] translate-x-[-50%] opacity-1 block z-[99] min-w-[250px] sm:min-w-[350px] 2xl:w-[20vw]">
                                <div class="p-2 bg-white border-1 rounded-2xl border border-gray-300 shadow-xl">
                                    <MonthCalendar />
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>

                <div v-if="false">
                    <SelectMenu class="min-w-[155px]" label="Miasto"
                        :list="[{ id: 0, name: 'Zielona Góra' }, { id: 1, name: 'Legnica' }]" />
                </div>
            </div>
            <div class="flex items-center mb-2">
                <div class="flex items-center rounded-md shadow-sm md:items-stretch">
                    <button type="button"
                        class="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50">
                        <span class="sr-only">Poprzedni dzień</span>
                        <Icon name="material-symbols:arrow-back-ios-new" width="15px" class="my-1" />
                    </button>
                    <button type="button"
                        class="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block">Dzisaj</button>
                    <span class="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
                    <button type="button"
                        class="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50">
                        <span class="sr-only">Następny dzień</span>
                        <Icon name="material-symbols:arrow-forward-ios-rounded" width="15px" class="my-1" />
                    </button>
                </div>
            </div>
        </header>

        <!-- Calendar info top row -->
        <div class="overflow-x-auto min-h-full px-[2px]">
            <div
                class="shadow mb-1 ring-1 ring-black ring-opacity-5 xl:flex xl:flex-auto xl:flex-col w-[250vw] sm:w-[175vw] md:w-[150vw] lg:w-[125vw] xl:w-auto">
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
                <div v-if="!isMobile()" v-for="coach in coaches" :key="coach.name"
                    class="w-full min-h-[10vh] grid grid-cols-calendar">

                    <!-- Coach name -->
                    <div class="text-gray-700 text-sm grid place-content-center text-center">
                        <p class="-rotate-90">{{ coach.name }}</p>
                    </div>

                    <!-- Coach Hours -->
                    <div v-for="hour in coach.hours" :key="hour.id" @click="openModal(hour, coach)"
                        class="relative py-1 px-2 border-[1px] border-gray-200 border-opacity-50" :ref="`field${hour.id}`">
                        <div v-if="!hour.myBooked && hour.people.length > 0 && hour.lookingFor"
                            class="flex justify-between text-xs h-[75%]" data-bs-toggle="tooltip" data-bs-placement="top"
                            title="Ci gracze szukają kogoś do gry, zapisz się!">
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
                                    <Icon name="material-symbols:search-rounded" width="15px" />
                                    <span>{{ hour.lookingFor }}</span>
                                </div>
                            </div>
                        </div>
                        <div v-if="hour.myBooked" class="text-left font-medium h-[75%] text-white flex">
                            <p class="text-xs">Jesteś zapisany!</p>
                            <Icon name="material-symbols:check-circle" width="15px" class="mb-1 min-w-[10px]" />
                        </div>
                        <div v-if="hour.location && hour.myBooked || hour.location && hour.lookingFor"
                            class="h-[25%] text-xs"
                            :class="[hour.myBooked ? 'text-white text-right' : 'flex justify-end items-end']">
                            <span>{{ hour.location }}</span>
                            <Icon name="ci:location" width="15px" class="inline" />
                        </div>
                    </div>
                </div>

                <!-- Mobile -->
                <div v-if="isMobile()" v-for="coach in coaches" class="isolate grid w-full grid-cols-calendar grid-rows-1">
                    <div class="text-gray-700 text-sm grid place-content-center text-center">
                        <p class="-rotate-90">{{ coach.name }}</p>
                    </div>
                    <button v-for="hour in coach.hours" :key="hour.id" type="button" @click="openModal(hour, coach)"
                        :ref="`field${hour.id}`"
                        class="flex h-20 flex-col py-1 px-2 focus:z-10 border border-gray-200 border-opacity-50">
                        <span class="sr-only">{{ hour.people.length }} people</span>
                        <div v-if="!hour.myBooked && hour.people.length > 0 && hour.lookingFor" class="h-[75%]">
                            <div class="flex items-center space-x-1">
                                <Icon name="material-symbols:search-rounded" width="15px" />
                                <span>{{ hour.lookingFor }}</span>
                            </div>
                            <span class="-mx-0.5 flex flex-wrap-reverse xl:h-full mt-2">
                                <span v-for="person in hour.people" :key="person.id"
                                    class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                            </span>
                        </div>
                        <div v-if="hour.myBooked" class="grid place-content-center h-full w-full text-center font-medium">
                            <Icon name="material-symbols:check-circle" width="15px" class="text-white-primary" />
                        </div>
                        <div v-if="hour.location && hour.myBooked || hour.location && hour.lookingFor"
                            class="h-[25%] text-xs flex justify-end items-end" :class="[hour.myBooked ? 'text-white' : '']">

                            <span>{{ hour.location }}</span>
                            <Icon name="ci:location" width="15px" class="inline" />
                        </div>
                    </button>
                </div>

            </div>
        </div>

    </div>
</template>

<script lang='ts'>
function getFieldColor(color: String): string {
    switch (color) {
        case 'Booked':
            return 'red';
        case 'Free':
            return 'white';
        case 'Closed':
            return 'grey';
        case 'MyBookedConfirmed':
            return 'green';
        case 'MyBookedUncomfirmed':
            return 'yellow';
        default:
            return 'grey';
    }
}

export default {
    data() {
        return {
            coaches: [
                {
                    id: 0,
                    name: 'Trener1',
                    phone: '+48 111 111 111',
                    email: 'trener1@email.com',
                    hours: [
                        {
                            id: 1,
                            myBooked: false,
                            confirmed: true,
                            location: '',
                            people: [],
                            status: 'Closed',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: '0'
                        },
                        {
                            id: 2,
                            myBooked: false,
                            confirmed: true,
                            location: '',
                            people: [],
                            status: 'Free',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: '0'
                        },
                        {
                            id: 3,
                            myBooked: false,
                            confirmed: true,
                            location: '',
                            people: [],
                            status: 'Free',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: '0'
                        },
                        {
                            id: 4,
                            myBooked: false,
                            confirmed: true,
                            location: '',
                            people: [],
                            status: 'Free',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: '0'
                        },
                        {
                            id: 5,
                            myBooked: true,
                            confirmed: true,
                            location: 'Hasta',
                            people: [{
                                id: 1, name: 'Daniel'
                            }],
                            status: 'Booked',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Adult',
                            skillPreference: 'Advanced',
                            sizePreference: 1
                        },
                        {
                            id: 6,
                            myBooked: false,
                            confirmed: true,
                            people: [
                                { id: 1, name: 'Jan', href: '#' },
                                { id: 2, name: 'Daniel', href: '#' },
                                { id: 3, name: 'Test', href: '#' },
                            ],
                            location: 'CRS',
                            status: 'Booked',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 3
                        },
                        {
                            id: 7,
                            myBooked: true,
                            confirmed: false,
                            location: 'Hasta',
                            people: [{
                                id: 1, name: 'Daniel'
                            }],
                            status: 'Booked',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: false,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 1
                        },
                        {
                            id: 8,
                            lookingFor: 0,
                            myBooked: false,
                            confirmed: true,
                            people: [
                                { id: 1, name: 'Jan', href: '#' },
                                { id: 2, name: 'Daniel', href: '#' },
                                { id: 3, name: 'Test', href: '#' },
                            ],
                            location: 'Grape',
                            status: 'Booked',
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 3
                        },
                        {
                            id: 9,
                            people: [],
                            myBooked: false,
                            confirmed: true, location: 'Hasta',
                            status: 'Free',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 0
                        },
                        {
                            id: 10,
                            people: [],
                            myBooked: false,
                            confirmed: true, location: '',
                            status: 'Free',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 0
                        },
                        {
                            id: 11,
                            people: [],
                            myBooked: false,
                            confirmed: true, location: '',
                            status: 'Free',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: false,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 0
                        },
                        {
                            id: 12,
                            myBooked: false,
                            confirmed: true,
                            people: [{ id: 3, name: 'Jan', href: '#' }],
                            location: 'CRS',
                            status: 'Booked',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 1
                        },
                        {
                            id: 13,
                            lookingFor: 2,
                            myBooked: false,
                            confirmed: true,
                            people: [
                                { id: 1, name: 'Jan', href: '#' },
                                { id: 2, name: 'Daniel', href: '#' },
                            ],
                            location: 'Grape',
                            status: 'Booked',
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 2
                        },
                        {
                            id: 14,
                            myBooked: false,
                            confirmed: true,
                            location: '',
                            people: [
                            ],
                            status: 'Closed',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: false,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 2
                        },
                    ]
                },

                {
                    id: 1,
                    name: 'Trener2',
                    phone: '+48 222 222 222',
                    email: 'trener2@email.com',
                    hours: [
                        {
                            id: 15,
                            myBooked: false,
                            confirmed: true,
                            location: '',
                            people: [],
                            status: 'Closed',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 0
                        },
                        {
                            id: 16,
                            myBooked: false,
                            confirmed: true,
                            location: '',
                            people: [],
                            status: 'Free',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: false,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 0
                        },
                        {
                            id: 17,
                            myBooked: false,
                            confirmed: false,
                            location: '',
                            people: [],
                            status: 'Free',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 0
                        },
                        {
                            id: 18,
                            myBooked: false,
                            confirmed: true,
                            location: '',
                            people: [],
                            status: 'Free',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 0
                        },
                        {
                            id: 19,
                            myBooked: true,
                            confirmed: false,
                            location: 'Hasta',
                            people: [
                                { id: 1, name: 'Jan', href: '#' },
                                { id: 2, name: 'Daniel', href: '#' },
                            ],
                            status: 'Booked',
                            lookingFor: 1,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: false,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 2
                        },
                        {
                            id: 20,
                            myBooked: false,
                            confirmed: true,
                            people: [
                                { id: 1, name: 'Jan', href: '#' },
                                { id: 2, name: 'Daniel', href: '#' },
                                { id: 3, name: 'Test', href: '#' },
                            ],
                            location: 'CRS',
                            status: 'Booked',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 3
                        },
                        {
                            id: 21,
                            myBooked: true,
                            confirmed: false,
                            location: 'Hasta',
                            people: [{
                                id: 1, name: 'Daniel'
                            }],
                            status: 'Booked',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: false,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 1
                        },
                        {
                            id: 22,
                            lookingFor: 0,
                            myBooked: false,
                            confirmed: true,
                            people: [
                                { id: 1, name: 'Jan', href: '#' },
                                { id: 2, name: 'Daniel', href: '#' },
                                { id: 3, name: 'Test', href: '#' },
                            ],
                            location: 'Grape',
                            status: 'Booked',
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 3
                        },
                        {
                            id: 23,
                            people: [],
                            myBooked: false,
                            confirmed: true, location: 'Hasta',
                            status: 'Free',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 0
                        },
                        {
                            id: 24,
                            people: [],
                            myBooked: false,
                            confirmed: true, location: '',
                            status: 'Free',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: false,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 0
                        },
                        {
                            id: 25,
                            people: [],
                            myBooked: false,
                            confirmed: true, location: '',
                            status: 'Free',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 0
                        },
                        {
                            id: 26,
                            myBooked: false,
                            confirmed: true,
                            people: [{ id: 3, name: 'Jan', href: '#' }],
                            location: 'CRS',
                            status: 'Booked',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: false,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 0
                        },
                        {
                            id: 27,
                            lookingFor: 1,
                            myBooked: false,
                            confirmed: false,
                            people: [
                                { id: 1, name: 'Jan', href: '#' },
                                { id: 2, name: 'Daniel', href: '#' },
                                { id: 3, name: 'Test', href: '#' },
                            ],
                            location: 'Grape',
                            status: 'Booked',
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 3
                        },
                        {
                            id: 28,
                            myBooked: false,
                            confirmed: true,
                            location: '',
                            people: [
                            ],
                            status: 'Closed',
                            lookingFor: 0,
                            time: '16:00',
                            date: '22-12-20222',
                            canBeRebooked: true,
                            agePreference: 'Junior',
                            skillPreference: 'Intermediate',
                            sizePreference: 0
                        },
                    ]
                },
            ],

            dayCalendarShow: false,
        }
    },

    mounted() {
        this.coaches.forEach(coach => {
            coach.hours.forEach(hour => {
                this.setFieldColor(hour);
            });
        });
    },

    methods: {
        showCalendar() {
            this.dayCalendarShow = !this.dayCalendarShow;
        },

        openModal(hour: any, coach: any) {
            if (hour.myBooked == true || hour.lookingFor >= 1 || hour.status == 'Free') (this.$refs.Modal as any).updateModalInfo(hour, coach);

            if (hour.myBooked == true) {
                console.log("myBooked");

                (this.$refs.Modal as any).showEditContent();
                return;
            }
            if (hour.lookingFor >= 1) {
                console.log("lookingFor");

                (this.$refs.Modal as any).showJoinContent();
                return;
            }
            if (hour.status == 'Free') {
                console.log("Free");

                (this.$refs.Modal as any).showNewContent();
                return;
            }
        },

        setFieldColor(hour: any) {
            const fieldElement = this.$refs[`field${hour.id}`] as any;

            if (hour.myBooked == true && hour.confirmed == true) {
                fieldElement[0].classList.add('green')
                return;
            }

            if (hour.myBooked == true && hour.confirmed == false) {
                fieldElement[0].classList.add('yellow')
                return;
            }

            if (hour.lookingFor >= 1) {
                fieldElement[0].classList.add('white')
                return;
            }

            fieldElement[0].classList.add(getFieldColor(hour.status))
        },

        isMobile() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.white {
    cursor: pointer;
    background-color: rgb(248, 248, 248);

    &:hover {
        background-color: darken(rgb(248, 248, 248), 10%);
    }
}

.green {
    cursor: pointer;
    background-color: rgb(16 185 129);

    &:hover {
        background-color: darken(rgb(16 185 129), 7%);
    }
}

.yellow {
    cursor: pointer;
    background-color: rgb(228, 189, 83);

    &:hover {
        background-color: darken(rgb(228, 189, 83), 15%);
    }
}

.red {
    background-color: rgb(219, 64, 64);

    // &:hover {
    // background-color: darken(rgb(219, 64, 64), 10%);
    // }
}

.grey {
    background-color: rgb(138, 138, 138);

    // &:hover {
    // background-color: darken(rgb(138, 138, 138), 10%);
    // }
}
</style>