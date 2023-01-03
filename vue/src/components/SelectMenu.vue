<template>
    <Listbox as="div" v-model="selected">
        <ListboxLabel class="block text-sm font-medium text-gray-700">{{ label }}</ListboxLabel>
        <div class="relative mt-1">
            <ListboxButton
                class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-xs sm:text-sm">
                <span class="block truncate">{{ selected.name }}</span>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <Icon icon="ic:round-keyboard-arrow-up" class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
            </ListboxButton>

            <transition name="fade">
                <ListboxOptions
                    class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-xl ring-1 ring-black ring-opacity-10 focus:outline-none text-xs sm:text-sm">
                    <ListboxOption as="template" v-for="element in list" :key="element.id" :value="element"
                        v-slot="{ active, selected }">
                        <li
                            :class="[active ? 'text-white bg-emerald-500' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                            <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{
                                    element.name
                            }}</span>

                            <span v-if="selected"
                                :class="[active ? 'text-white' : 'text-emerald-500', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                <Icon icon="ic:round-check" class="h-5 w-5" aria-hidden="true" />
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template >
<script lang="ts">
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue';
import { Icon } from "@iconify/vue";
interface City {
    id: number;
    name: string;
}
export default {
    components: {
        Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions, Icon
    },
    props: {
        label: String,
        list: {
            type: Array as () => City[],
            required: true,
        },
    },
    data() {
        return {
            selected: { id: 0, name: '' }
        }
    },
    mounted() {
        this.selected = this.list[0]
    }
}
</script>
<style lang="">
    
</style>