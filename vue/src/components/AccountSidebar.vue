<template>
    <aside class="py-6 lg:col-span-2 space-y-5 divide-y">
        <nav class="space-y-1">
            <router-link v-for="item in subNavigation" :key="item.name" :to="{ name: item.to }"
                @click="setElementActive(item.name)"
                :class="[item.current ? 'bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700' : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900', 'group border-l-4 px-3 py-2 flex items-center text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined">
                <Icon :icon="item.icon" width="20px" class="mr-2" />
                <span class="truncate">{{ item.name }}</span>
            </router-link>
        </nav>
        <nav class="space-y-1 pt-4">
            <router-link v-for="item in coachNavigation" :key="item.name" :to="{ name: item.to }"
                @click="setElementActive(item.name)"
                :class="[item.current ? 'bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700' : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900', 'group border-l-4 px-3 py-2 flex items-center text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined">
                <Icon :icon="item.icon" width="20px" class="mr-2" />
                <span class="truncate">{{ item.name }}</span>
            </router-link>
        </nav>
    </aside>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon,
    },
    data() {
        return {
            subNavigation: [
                { name: 'Konto', to: 'AccountSettings', icon: 'material-symbols:account-circle', current: false },
                { name: 'Rezerwacje', to: 'UserBooking', icon: 'material-symbols:calendar-month', current: false },
                { name: 'Moje treningi', to: 'MyTrainings', icon: 'material-symbols:sports-tennis', current: false },
                { name: 'Moje wydarzenia', to: 'MyEvents', icon: 'ic:sharp-emoji-events', current: false },
            ],

            coachNavigation: [
                { name: 'Zarządzaj treningami', to: 'CoachTrainings', icon: 'material-symbols:calendar-month', current: false },
            ],
        }
    },

    methods: {
        setElementActive(itemName: String) {
            // this.subNavigation.forEach(element => {
            //     element.current = false;
            // });
            // this.coachNavigation.forEach(element => {
            //     element.current = false;
            // });

            // let objectToGet = this.subNavigation.filter(element => {
            //     return element.name === itemName
            // })
            // objectToGet[0].current = true;
        }
    }
}
</script>
<style lang="">
    
</style>