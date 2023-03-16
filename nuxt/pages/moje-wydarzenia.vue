<template>
    <div>
        <h6>Moje wydarzenia</h6>
        <p>Tutaj znajdziesz wydarzenia na które się zapisałeś.</p>
        <div v-auto-animate class="flex space-x-4">
            <div v-for="item in items" :key="item" @click="removeItem(item)">
                {{ item }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    name: 'MyEvents',
    layout: 'account'
})

let items = ["😏", "😐", "😑", "😒", "😕",];
function removeItem(toRemove: string) {
    items = items.filter((item: string) => item !== toRemove)
}
</script>
<style lang="">
    
</style>