<template >
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="toggleModal">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full justify-center p-4 text-center items-center sm:p-0 divide-y">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl divide-y">

                            <div class="bg-gray-50 px-5 py-4 flex justify-between items-center">
                                <div class="space-x-2 flex">
                                    <button class="px-3 py-1 text-white text-xs rounded-full"
                                        :class="[hour.confirmed ? 'bg-emerald-500' : 'bg-yellow-500']">
                                        {{ infoButton }}
                                    </button>

                                    <Tooltip text="Ten trening jest przeznaczony dla młodszych graczy" position="top">
                                        <button class="px-3 py-1 text-white text-xs rounded-full bg-blue-500">
                                            Junior
                                        </button>
                                    </Tooltip>

                                    <Tooltip text="Ten trening jest dla jednej osoby">
                                        <button class="px-3 py-1 text-white text-xs rounded-full bg-blue-500">
                                            Solo
                                        </button>
                                    </Tooltip>
                                </div>
                                <Icon @click="toggleModal" icon="ic:twotone-close" width="15px"
                                    class="cursor-pointer" />
                            </div>

                            <div class="bg-white px-5 py-4">
                                <div class="sm:flex sm:items-start">
                                    <div class="sm:text-left">
                                        <DialogTitle as="h4" class="text-xl font-medium leading-6 text-gray-900">
                                            {{ title }}
                                        </DialogTitle>
                                        <div class="mt-2">
                                            <p class="text-sm text-gray-700">
                                                {{ underTitle }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white px-5 py-4">
                                <div class="sm:flex sm:items-start">
                                    <div class="sm:text-left">
                                        <h5 class="leading-[24px] text-md font-medium mb-1">
                                            <Icon icon="ic:baseline-person" width="20px" class="inline" />
                                            {{ coach.name }}
                                        </h5>
                                        <div class="text-sm text-gray-500 ml-6 space-y-1">
                                            <p>
                                                <Icon icon="ic:baseline-phone" class="inline" />
                                                {{ coach.phone }}
                                            </p>
                                            <p>
                                                <Icon icon="ic:baseline-mail" class="inline" />
                                                {{ coach.email }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white px-5 py-4">
                                <div class="sm:flex sm:items-start justify-between">
                                    <div class="sm:text-left">
                                        <h5 class="leading-[24px] text-md font-medium mb-1">
                                            <Icon icon="ic:baseline-info" width="20px" class="inline" />
                                            Informacje o treningu
                                        </h5>
                                        <div class="text-sm text-gray-500 ml-6 space-y-1">
                                            <p>
                                                <Icon icon="ic:baseline-sports-tennis" class="inline mr-2" />
                                                <span v-for="player in hour.people">{{ player.name }}, </span>
                                            </p>
                                            <p>
                                                <Icon icon="ic:outline-hourglass-full" class="inline mr-2" />
                                                <span>{{ hour.time }}</span>
                                            </p>
                                            <p>
                                                <Icon icon="ic:baseline-calendar-month" class="inline mr-2" />
                                                <span>{{ hour.date }}</span>
                                            </p>
                                            <p>
                                                <Icon icon="ic:baseline-location-on" class="inline mr-2" />
                                                <span>{{ hour.location }}</span>
                                            </p>
                                        </div>
                                    </div>

                                    <Tooltip
                                        text="Ta opcja pozwala na dopisywanie się innych graczy do treningu co obniży jego koszt na osobę."
                                        position="top">
                                        <div v-if="hour.myBooked" class="">
                                            <p class="text-xs mb-1">Szukasz osób do gry?</p>
                                            <SwitchCustom :state="lookingForEnabled" :icons="true"
                                                class="float-right" />
                                        </div>
                                    </Tooltip>

                                </div>
                            </div>

                            <div class="bg-gray-50 sm:flex sm:flex-row-reverse px-5 py-4">
                                <Button v-if="hour.myBooked" @click="toggleModal" styling="danger">Odrezerwuj</Button>
                                <Button v-if="hour.myBooked" @click="toggleModal" styling="white">Poproś o
                                    zmianę</Button>
                                <Button v-if="!hour.myBooked" @click="toggleModal" styling="success">Zapisz się</Button>
                            </div>

                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
<script lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Button, SwitchCustom, Tooltip } from '../components';
import { Icon } from '@iconify/vue';

export default {
    components: {
        Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, SwitchCustom, Button, Icon, Tooltip
    },

    data() {
        return {
            open: false,

            infoButton: '',
            title: '',
            underTitle: '',
            lookingForEnabled: false,
            coach: {
                name: '',
                phone: '',
                email: '',
            },
            hour: {
                lookingFor: 0,
                confirmed: false,
                time: 0,
                date: 0,
                location: '',
                myBooked: false,
                people: [{
                    name: ''
                }]
            },
        }
    },
    methods: {
        toggleModal() {
            this.open = !this.open;
        },
        updateModalInfo(hour: any, coach: any) {
            this.hour = hour;
            this.coach = coach;

            this.hour.confirmed ? this.infoButton = 'Potwierdzony' : this.infoButton = 'Nie potwierdzony';
            this.hour.lookingFor >= 1 ? this.lookingForEnabled = true : this.lookingForEnabled = false;

            let names = [];
            for (let i = 0; i < hour.people.length; i++) {
                let person = hour.people[i].name;
                person = ' ' + person;
                names.push(person)
            }

            //TODO add look for players enable / disable action if its your hour.
            if (hour.confirmed && hour.myBooked) {
                this.title = 'Jesteś już zapisany!';
                this.underTitle = 'Wszystko załatwione, do zobaczenia na treningu!';
            }
            if (!hour.confirmed && hour.myBooked) {
                this.title = 'Jesteś zapisany, ale trening jeszcze nie został potwierdzony.';
                this.underTitle = 'Następny krok to potwierdzenie treningu przez trenera, poczekaj chwilę, jeśli trening nie zostanie potwierdzony, skontaktuj się z trenerem';
            }
            if (!hour.myBooked && hour.lookingFor >= 1) {
                this.title = 'Ci gracze szukają dodatkowych osób na trening!';
                this.underTitle = `${names} szukają ${hour.lookingFor} dodatkowych osób do treningu - dopisz się do nich, poczekaj na potwierdzenie i trenuj razem z nimi!`;
            }
        }
    }
}
</script>

<style lang="">
    
</style>