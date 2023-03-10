<template >
    <div class="bg-gray-50 px-5 py-4 flex justify-between items-center">
        <div class="space-x-2 flex">
            <button class="px-3 py-1 text-white text-xs rounded-full truncate"
                :class="[hour?.confirmed ? 'bg-emerald-500' : 'bg-yellow-500']">
                {{ content?.infoButton }}
            </button>

            <Tooltip v-if="content?.agePreference" :text="content?.agePreference.tooltip" position="top">
                <button class="px-3 py-1 text-white text-xs rounded-full bg-blue-500">
                    {{ content?.agePreference.display }}
                </button>
            </Tooltip>

            <Tooltip v-if="content?.sizePreference" :text="content?.sizePreference.tooltip">
                <button class="px-3 py-1 text-white text-xs rounded-full bg-blue-500">
                    {{ content?.sizePreference.display }}
                </button>
            </Tooltip>

            <Tooltip v-if="content?.skillPreference" :text="content?.skillPreference.tooltip">
                <button class="px-3 py-1 text-white text-xs rounded-full bg-blue-500">
                    {{ content?.skillPreference.display }}
                </button>
            </Tooltip>
        </div>
        <Icon @click="$emit('toggleModal')" icon="ic:twotone-close" width="15px" class="cursor-pointer" />
    </div>

    <div class="bg-white px-5 py-4">
        <div class="sm:flex sm:items-start">
            <div class="sm:text-left">
                <DialogTitle as="h4" class="text-xl font-medium leading-6 text-gray-900">
                    {{ content?.title }}
                </DialogTitle>
                <div class="mt-2">
                    <p class="text-sm text-gray-700">
                        {{ content?.underTitle }}
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
                    {{ coach?.name }}
                </h5>
                <div class="text-sm text-gray-500 ml-6 space-y-1">
                    <p>
                        <Icon icon="ic:baseline-phone" class="inline" />
                        {{ coach?.phone }}
                    </p>
                    <p>
                        <Icon icon="ic:baseline-mail" class="inline" />
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
                    <Icon icon="ic:baseline-info" width="20px" class="inline" />
                    Informacje o treningu
                </h5>
                <div class="text-sm text-gray-500 ml-6 space-y-1">
                    <p>
                        <Icon icon="ic:sharp-groups" class="inline mr-2" />
                        <span> {{ playerCount }} </span>
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
                </div>
            </div>

            <Tooltip text="Ta opcja pozwala na dopisywanie się innych graczy do treningu co obniży jego koszt na osobę."
                position="top" class="mt-2 md:mt-0">
                <div v-if="hour?.myBooked" class="">
                    <p class="text-xs mb-1">Szukasz osób do gry?</p>
                    <SwitchCustom :state="content?.lookingForEnabled" :icons="true" class="md:float-right" />
                </div>
            </Tooltip>

        </div>
    </div>

    <div class="bg-gray-50 sm:flex justify-end px-5 py-4 space-y-2 sm:space-y-0 sm:space-x-2">
        <Button v-if="hour?.myBooked" @click="" styling="white" class="w-full md:w-auto" size="xs">
            Poproś o zmianę
        </Button>
        <Button v-if="hour?.myBooked" @click="" styling="danger" size="xs" class="w-full md:w-auto">
            Odrezerwuj
        </Button>
    </div>
</template>
<script lang="ts">
import { DialogTitle } from '@headlessui/vue'
import { Button, SwitchCustom, Tooltip } from '../components';
import { Icon } from '@iconify/vue';

export default {
    components: {
        DialogTitle, SwitchCustom, Button, Icon, Tooltip
    },

    props: {
        coach: Object,
        hour: Object,
        content: Object,
    },

    data() {
        return {
            playerCount: 0,
        }
    },
    mounted() {
        this.playerCount = this.hour?.people.length
    },
    methods: {

    }
}
</script>

<style lang="">
    
</style>