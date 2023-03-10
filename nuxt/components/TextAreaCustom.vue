<template>
    <div class="sm:col-span-2">
        <div class="flex justify-between">
            <label :for="name" class="block text-sm font-medium">{{ label }} <span v-if="required">*</span></label>
            <span id="message-max" class="text-sm">do 500 znaków</span>
        </div>
        <div class="mt-1">
            <textarea :id="name" :name="name" :rows="rows" v-model="value"
                class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-3"
                aria-describedby="message-max" :placeholder="placeholder" />
        </div>
    </div>
</template>
<script lang="ts">
export default {
    props: {
        label: String,
        name: String,
        placeholder: String,
        rows: Number,
        required: Boolean,

        modelValue: String,

        optional: {
            default: false,
            type: Boolean,
        }
    },

    data() {
        return {
            content: this.value
        }
    },

    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value: any) {
                this.$emit('update:modelValue', value)
            }
        }
    },
}
</script>
<style lang="">
    
</style>