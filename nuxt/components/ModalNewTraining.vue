<template>
    <div class="bg-gray-50 px-5 py-4 flex justify-between items-center">
        <div class="space-x-2 flex">
            <button class="px-3 py-1 text-white text-xs rounded-full"
                :class="[hour?.status === 'Free' ? 'bg-emerald-500' : 'bg-red-800']">
                {{ hour?.status === 'Free' ? 'Wolny termin' : 'Zajęty!' }}
            </button>
        </div>
        <Icon @click="$emit('toggleModal')" icon="ic:twotone-close" width="15px" class="cursor-pointer" />
    </div>

    <div v-if="currentContent == 0" class="divide-y">
        <div class="grid grid-cols-2 space-x-6 py-4 px-5">
            <div class="bg-white">
                <div class="sm:flex sm:items-start">
                    <div class="sm:text-left">
                        <DialogTitle as="h4" class="text-lg font-medium leading-6 text-gray-900">
                            Typ treningu
                        </DialogTitle>
                        <div class="mt-2">
                            <SelectMenu class="sm:min-w-[150px] sm:w-[200px]"
                                :list="[{ id: 1, name: 'Solo' }, { id: 2, name: 'Para' }, { id: 3, name: 'Grupa' }]" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white">
                <div class="sm:flex sm:items-start">
                    <div class="sm:text-left">
                        <DialogTitle as="h4" class="text-lg font-medium leading-6 text-gray-900">
                            Poziom gry
                        </DialogTitle>
                        <div class="mt-2">
                            <SelectMenu class="sm:min-w-[150px] sm:w-[200px]"
                                :list="[{ id: 1, name: 'Początkujący' }, { id: 2, name: 'Średniozaawansowany' }, { id: 2, name: 'Zaawansowany' }]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 space-x-6 py-4 px-5">
            <div class="bg-white">
                <div class="sm:flex sm:items-start">
                    <div class="sm:text-left">
                        <DialogTitle as="h4" class="text-lg font-medium leading-6 text-gray-900">
                            Dopisywanie się innych osób.
                        </DialogTitle>
                        <p class="text-xs">Ta opcja pozwala innym osobom dopisać się do Tego treningu co obniży jego
                            koszt
                            na <b>jedną osobe.</b>
                        </p>
                        <div class="mt-2">
                            <SwitchCustom :icons="true" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white">
                <div class="sm:flex sm:items-start">
                    <div class="sm:text-left">
                        <DialogTitle as="h4" class="text-lg font-medium leading-6 text-gray-900">
                            Wiek graczy
                        </DialogTitle>
                        <div class="mt-2">
                            <SelectMenu class="sm:min-w-[150px] sm:w-[200px]"
                                :list="[{ id: 1, name: 'Dzieci' }, { id: 2, name: 'Junior' }, { id: 2, name: 'Dorośli' }]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="currentContent == 1" class="divide-y">
        <div class="px-5 py-4">
            <DialogTitle as="h4" class="text-lg font-medium leading-6 text-gray-900 mb-4">
                Aby zarezerwować trening podaj:
            </DialogTitle>
            <div class="grid grid-cols-2 space-x-6">
                <InputCustom label="Imię" :required="true" type="text" name="name" placeholder="Jan" />
                <InputCustom label="Nazwisko" :required="true" type="text" name="surname" placeholder="Kowalski" />
            </div>
        </div>
        <div class="px-5 py-4 grid grid-cols-2">
            <InputCustom label="Telefon" :required="true" type="phone" name="phone" placeholder="+48 000 000 000" />
        </div>
    </div>

    <div v-if="currentContent == 2" class="divide-y">
        <div class="px-5 py-4">
            <DialogTitle as="h4" class="text-lg font-medium leading-6 text-gray-900 mb-2">
                Potwierdź czy wszystko się zgadza.
            </DialogTitle>
            <p class="text-gray-600 text-sm">
                Jeśli tak, zatwierdź i ostatni krok to potwierdzenie treningu przez trenera.
            </p>
        </div>
        <div class="sm:text-left px-5 py-4">
            <h5 class="leading-[24px] text-md font-medium mb-1">
                <Icon icon="ic:baseline-info" width="20px" class="inline" />
                Informacje o treningu
            </h5>
            <div class="text-sm text-gray-500 ml-6 space-y-1">
                <p>
                    <Icon icon="ic:sharp-groups" class="inline mr-2" />
                    <span>{{ playerCount }} </span>
                </p>
                <p>
                    <Icon icon="ic:outline-hourglass-full" class="inline mr-2" />
                    <span>{{ hour?.time }}</span>
                </p>
                <p>
                    <Icon icon="ic:baseline-calendar-month" class="inline mr-2" />
                    <span>{{ hour?.date }}</span>
                </p>
                <p>
                    <Icon icon="ic:baseline-location-on" class="inline mr-2" />
                    <span>{{ hour?.location }}</span>
                </p>
                <p>
                    <Icon icon="ic:round-person-add" class="inline mr-2" />
                    <span>{{ hour?.lookingFor }}</span>
                </p>
            </div>
        </div>
    </div>

    <div class="bg-gray-50 sm:flex justify-end px-5 py-4 space-y-2 sm:space-y-0 sm:space-x-2">
        <Button v-if="!hour?.myBooked && currentContent >= 1" @click="back" styling="white" class="w-full md:w-auto"
            size="xs">
            Cofnij
        </Button>
        <Button v-if="!hour?.myBooked && currentContent <= 1" @click="next" styling="success" class="w-full md:w-auto"
            size="xs">
            Dalej
        </Button>
        <Button v-if="!hour?.myBooked && currentContent == 2" @click="" class="w-full md:w-auto" size="xs">
            Zatwierdź
        </Button>
    </div>
</template>

<script lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Button, SwitchCustom, Tooltip, SelectMenu, InputCustom } from '../components';
import { Icon } from '@iconify/vue';

export default {
    components: {
        Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, SwitchCustom, Button, Icon, Tooltip, SelectMenu, InputCustom
    },
    props: {
        coach: Object,
        hour: Object,
        content: Object,
    },

    data() {
        return {
            currentContent: 0,
            playerCount: 0
        }
    },
    mounted() {
        // this.playerCount = this.hour.people.length
    },
    methods: {
        next() {
            this.currentContent++;
        },
        back() {
            this.currentContent--;
        },
    }
}
</script>

<style lang="">
    
</style>