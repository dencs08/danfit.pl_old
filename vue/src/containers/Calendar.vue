<template>
    <section class="mt-20 lg:mt-24">
        <div class="container">
            <h3>Rezerwacje</h3>

            <div class="mt-10">
                <div class="h-10 space-x-4 flex">
                    <div class="flex-1 relative">
                        <Button class="btn-xs" @click="showCalendar">
                            <span>
                                Wyświelt kalendarz
                                <Icon icon="material-symbols:keyboard-arrow-down" width="20px" class="inline" />
                            </span>
                        </Button>

                        <div v-auto-animate>
                            <div v-if="dayCalendarShow"
                                class="absolute top-[120%] opacity-1 block z-[99] min-w-[100%] sm:min-w-[350px] 2xl:w-[20vw]">
                                <div class="p-2 bg-white border-1 border-primaryBlack rounded-2xl">
                                    <MonthCalendar />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button class="btn-xs hidden lg:block">Wyświetl moje treningi</Button>
                </div>
                <DayCalendar class="mt-3" />
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { DayCalendar, MonthCalendar, Button } from '../components';
import { Icon } from '@iconify/vue';
export default {
    components: {
        DayCalendar, MonthCalendar, Button, Icon
    },

    data() {
        return {
            dayCalendarShow: false,
        }
    },

    methods: {
        showCalendar() {
            this.dayCalendarShow = !this.dayCalendarShow;
        }
    }
}
</script>
<style lang="">
    
</style>