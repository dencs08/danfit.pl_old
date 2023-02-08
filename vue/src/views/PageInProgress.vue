<template>
    <div class="h-screen grid place-content-center text-center">
        <h3 class="">Podstrona <TextGradient>aktualnie w budowie!</TextGradient>
        </h3>
        <h2 class="mb-10">
            <Link link="Contact">Zarezerwuj trening przez telefon</Link>
        </h2>
        <Link link="Start" :underline="true">Powrót na strone główną</Link>
    </div>
</template>
<script lang="ts">
import { TextGradient, Link } from '../components'
export default {
    components: {
        TextGradient,
        Link
    }
}
</script>
<style lang="">
    
</style>