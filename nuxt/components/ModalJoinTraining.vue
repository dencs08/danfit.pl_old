<template>
    <div class="bg-gray-50 px-5 py-4 flex justify-between items-center">
        <div class="space-x-2 flex">
            <button class="px-3 py-1 text-white text-xs rounded-full"
                :class="[hour?.confirmed ? 'bg-emerald-500' : 'bg-yellow-500']">
                {{ content?.infoButton }}
            </button>

            <Tooltip text="Ten trening jest przeznaczony dla młodszych graczy" position="top">
                <button class="px-3 py-1 text-white text-xs rounded-full bg-blue-500">
                    Dorośli
                </button>
            </Tooltip>

            <Tooltip text="Ten trening jest dla dwóch lub więcej osób">
                <button class="px-3 py-1 text-white text-xs rounded-full bg-blue-500">
                    Grupa
                </button>
            </Tooltip>
        </div>
        <Icon @click="$emit('toggleModal')" name="ic:twotone-close" width="15px" class="cursor-pointer" />
    </div>

    <div class="bg-white px-5 py-4">
        <div class="sm:flex sm:items-start">
            <div class="sm:text-left">
                <DialogTitle as="h4" class="text-xl font-medium leading-6 text-gray-900">
                    Ci gracze szukają dodatkowych osób na trening!
                </DialogTitle>
                <div class="mt-2">
                    <p class="text-sm text-gray-700">
                        {{ playerCount }} gracz/y szukają {{ hour?.lookingFor }} dodatkowych osób do treningu - dopisz
                        się
                        do nich, poczekaj na
                        potwierdzenie i trenuj razem z nimi!
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-white px-5 py-4">
        <div class="sm:flex sm:items-start">
            <div class="sm:text-left">
                <h5 class="leading-[24px] text-md font-medium mb-1">
                    <Icon name="ic:baseline-person" width="20px" class="inline" />
                    {{ coach?.name }}
                </h5>
                <div class="text-sm text-gray-500 ml-6 space-y-1">
                    <p>
                        <Icon name="ic:baseline-phone" class="inline" />
                        {{ coach?.phone }}
                    </p>
                    <p>
                        <Icon name="ic:baseline-mail" class="inline" />
                        {{ coach?.email }}
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-white px-5 py-4">
        <div class="sm:flex sm:items-start justify-between">
            <div class="sm:text-left">
                <h5 class="leading-[24px] text-md font-medium mb-1">
                    <Icon name="ic:baseline-info" width="20px" class="inline" />
                    Informacje o treningu
                </h5>
                <div class="text-sm text-gray-500 ml-6 space-y-1">
                    <p>
                        <Icon name="ic:sharp-groups" class="inline mr-2" />
                        <span>{{ playerCount }} </span>
                    </p>
                    <p>
                        <Icon name="ic:outline-hourglass-full" class="inline mr-2" />
                        <span>{{ hour?.time }}</span>
                    </p>
                    <p>
                        <Icon name="ic:baseline-calendar-month" class="inline mr-2" />
                        <span>{{ hour?.date }}</span>
                    </p>
                    <p>
                        <Icon name="ic:baseline-location-on" class="inline mr-2" />
                        <span>{{ hour?.location }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-gray-50 sm:flex justify-end px-5 py-4 space-x-2">
        <Button v-if="!hour?.myBooked" @click="" styling="success" size="xs" class="w-full md:w-auto">
            Zapisz się
        </Button>
    </div>
</template>
<script lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
export default {
    components: {
        Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot
    },
    props: {
        coach: Object,
        hour: Object,
        content: Object,
    },
    mounted() {
        this.playerCount = this.hour?.people.length
    },
    data() {
        return {
            playerCount: 0,
        }
    },
}
</script>
<style lang="">
    
</style>