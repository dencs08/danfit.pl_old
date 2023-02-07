<template>
    <div class="h-screen grid place-content-center text-center">
        <h3 class="mb-4">Podstrona <TextGradient>aktualnie w budowie!</TextGradient>
        </h3>
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