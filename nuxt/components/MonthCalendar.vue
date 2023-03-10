<template>
    <div>
        <div>
            <div class="text-center">
                <div class="flex items-center text-gray-900 px-10">
                    <button type="button"
                        class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Poprzedni miesiąc</span>
                        <Icon icon="material-symbols:arrow-back-ios-new-rounded" width="15px" />
                    </button>
                    <div class="flex-auto font-semibold">Styczeń</div>
                    <button type="button"
                        class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Następny miesiąc</span>
                        <Icon icon="material-symbols:arrow-forward-ios-rounded" width="15px" />
                    </button>
                </div>
                <div class="mt-3 grid grid-cols-7 text-xs leading-6 text-gray-500">
                    <div>P</div>
                    <div>W</div>
                    <div>Ś</div>
                    <div>C</div>
                    <div>P</div>
                    <div>S</div>
                    <div>N</div>
                </div>
                <div
                    class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200 pb-[2px]">
                    <button v-for="(day, dayIdx) in days" :key="day.date" type="button" :class="
                        ['py-1.5 hover:bg-gray-200 focus:z-10',
                            day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                            (day.isSelected || day.isToday) && 'font-semibold',
                            day.isSelected && 'text-white',
                            !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                            !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
                            day.isToday && !day.isSelected && 'text-gray-100 bg-emerald-600',
                            dayIdx === 0 && 'rounded-tl-lg',
                            dayIdx === 6 && 'rounded-tr-lg',
                            dayIdx === days.length - 7 && 'rounded-bl-lg',
                            dayIdx === days.length - 1 && 'rounded-br-lg'
                        ]">
                        <time :datetime="day.date" :class="
                            ['mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                                day.isSelected && day.isToday && 'bg-emerald-500',
                                day.isSelected && !day.isToday && 'bg-gray-900'
                            ]">
                            {{ day.date.split('-').pop()?.replace(/^0/, '') }}
                        </time>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
// import { Icon } from '@iconify/vue';
export default {
    data() {
        return {
            days: [
                { date: '2021-12-27' },
                { date: '2021-12-28' },
                { date: '2021-12-29' },
                { date: '2021-12-30' },
                { date: '2021-12-31' },
                { date: '2022-01-01', isCurrentMonth: true },
                { date: '2022-01-02', isCurrentMonth: true },
                { date: '2022-01-03', isCurrentMonth: true },
                { date: '2022-01-04', isCurrentMonth: true },
                { date: '2022-01-05', isCurrentMonth: true },
                { date: '2022-01-06', isCurrentMonth: true },
                { date: '2022-01-07', isCurrentMonth: true },
                { date: '2022-01-08', isCurrentMonth: true },
                { date: '2022-01-09', isCurrentMonth: true },
                { date: '2022-01-10', isCurrentMonth: true },
                { date: '2022-01-11', isCurrentMonth: true },
                { date: '2022-01-12', isCurrentMonth: true, isToday: true },
                { date: '2022-01-13', isCurrentMonth: true },
                { date: '2022-01-14', isCurrentMonth: true },
                { date: '2022-01-15', isCurrentMonth: true },
                { date: '2022-01-16', isCurrentMonth: true },
                { date: '2022-01-17', isCurrentMonth: true },
                { date: '2022-01-18', isCurrentMonth: true },
                { date: '2022-01-19', isCurrentMonth: true },
                { date: '2022-01-20', isCurrentMonth: true },
                { date: '2022-01-21', isCurrentMonth: true },
                { date: '2022-01-22', isCurrentMonth: true, isSelected: true },
                { date: '2022-01-23', isCurrentMonth: true },
                { date: '2022-01-24', isCurrentMonth: true },
                { date: '2022-01-25', isCurrentMonth: true },
                { date: '2022-01-26', isCurrentMonth: true },
                { date: '2022-01-27', isCurrentMonth: true },
                { date: '2022-01-28', isCurrentMonth: true },
                { date: '2022-01-29', isCurrentMonth: true },
                { date: '2022-01-30', isCurrentMonth: true },
                { date: '2022-01-31', isCurrentMonth: true },
                { date: '2022-02-01' },
                { date: '2022-02-02' },
                { date: '2022-02-03' },
                { date: '2022-02-04' },
                { date: '2022-02-05' },
                { date: '2022-02-06' },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>