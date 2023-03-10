<template>
    <Switch v-model="enabled"
        :class="[enabled ? 'bg-emerald-500' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out']">
        <span class="sr-only">{{ sr }}</span>
        <span
            :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']">
            <span
                :class="[enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200', 'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity']"
                aria-hidden="true">
                <Icon v-if="icons" name="ic:round-close" class="text-gray-500" width="13px" />
            </span>
            <span
                :class="[enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100', 'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity']"
                aria-hidden="true">
                <Icon v-if="icons" name="ic:round-check" class="text-gray-500" width="13px" />
            </span>
        </span>
    </Switch>
</template>
<script lang="ts">
import { Switch } from '@headlessui/vue'
export default {
    components: {
        Switch
    },
    props: {
        state: Boolean,
        icons: Boolean,
        sr: Text
    },
    data() {
        return {
            enabled: false,
        }
    },
    mounted() {
        this.enabled = this.state;
    }
}
</script>
<style lang="">
    
</style>