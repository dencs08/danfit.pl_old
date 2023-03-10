<template>
    <Transition>
        <div v-if="bannerVisible"
            class="bg-gray-900 border border-gray-700 px-5 md:px-10 min-w-[95%] fixed bottom-[99%] h-fit md:bottom-0 md:top-[95%] left-[50%] translate-x-[-50%] translate-y-[100%] md:translate-y-[-50%] rounded-xl">
            <div class="py-3">
                <div class="flex flex-wrap items-center justify-between">
                    <div class="flex w-0 flex-1 items-center">
                        <span class="flex">
                            <Icon name="ph:cookie-fill" width="35px" class="text-color-tertiary" />
                        </span>
                        <p class="ml-3 font-medium text-white">
                            <span class="inline">Ta strona wykorzystuje pliki cookies, korzystając ze strony akceptujesz
                                naszą
                                <Link link="Privacy">politykę prywatności</Link>
                            </span>
                        </p>
                    </div>
                    <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <button type="button" @click="toggleBanner"
                            class="-mr-1 flex rounded-md p-2 hover:bg-gray-700 duration-75 transition-all focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                            <span class="sr-only">Dismiss</span>
                            <Icon name="carbon:checkmark" class="text-white-primary" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts">
export default {
    data() {
        return {
            bannerVisible: false,
        }
    },

    mounted() {
        setTimeout(() => {
            this.bannerVisible = true;
        }, 1000);
    },

    methods: {
        toggleBanner() {
            this.bannerVisible = !this.bannerVisible;
        }
    }
}
</script>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>