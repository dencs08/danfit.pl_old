<template>
    <section class="mt-20 lg:mt-24">
        <div class="container">
            <h3>Rezerwacje</h3>

            <div>
                <DayCalendar />
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { DayCalendar } from '../components';
export default {
    components: {
        DayCalendar
    }
}
</script>
<style lang="">
    
</style>