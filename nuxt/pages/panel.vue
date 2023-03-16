<template></template>
<script setup lang="ts">
definePageMeta({
    name: 'Dashboard',
})

const navigation = [
    { name: 'Overview', href: '/dashboard/overview', current: false },
    { name: 'Clients', href: '/dashboard/clients', current: false },
    { name: 'Leads', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]
const user = {
    name: 'Daniel Buzon',
    email: 'danielbuzon@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]
</script>
<style lang="scss">
.quickFade-enter-from,
.quickFade-leave-to {
    opacity: 0;
}

.quickFade-enter-active,
.quickFade-leave-active {
    transition: opacity 0.125s ease-out;
}
</style>