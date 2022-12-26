<template>
    <Navbar />

    <div>
        <div>
            <AccountHeader />
            <div class="relative -mt-32">
                <div class="mx-auto max-w-screen-2xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
                    <div class="overflow-hidden rounded-lg bg-white shadow">
                        <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                            <AccountSidebar />
                            <div class="py-6 px-4 sm:p-6 lg:pb-8 lg:col-span-10">
                                <router-view v-slot="{ Component }">
                                    <transition name="fade" mode="out-in">
                                        <component :is="Component" />
                                    </transition>
                                </router-view>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { Button, Link, InputCustom, Navbar, AccountSidebar } from '../components';
import { AccountHeader } from '../containers';

export default {
    components: {
        AccountHeader,
        Button,
        Link,
        InputCustom,
        Navbar,
        AccountSidebar
    },

}
</script>

<style lang="scss" scoped>

</style>