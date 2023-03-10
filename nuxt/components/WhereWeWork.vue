<template>
    <div>
        <h3>Gdzie działamy?</h3>
        <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            <li v-for="city in cities" :key="city.name" class="col-span-1 flex rounded-md shadow-sm min-h-[100px]">
                <div
                    :class="[city.bgColor, 'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md']">
                    {{ city.initials }}</div>
                <div
                    class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                    <div class="flex-1 truncate px-4 py-2 text-sm">
                        <router-link :to="{ name: city.to }" class="font-medium text-gray-900 hover:text-gray-600">{{
                            city.name
                        }}</router-link>
                        <p class="text-gray-500">{{ city.coaches }} Trenerów</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
            cities: [
                { name: 'Legnica', initials: 'LG', to: 'Contact', coaches: 2, bgColor: 'bg-emerald-500' },
                { name: 'Zielona Góra', initials: 'ZG', to: 'Contact', coaches: 2, bgColor: 'bg-blue-500' },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>