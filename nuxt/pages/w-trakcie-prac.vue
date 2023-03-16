<template>
    <div class="h-screen grid place-content-center text-center">
        <h3 class="">Podstrona <TextGradient>aktualnie w budowie!</TextGradient>
        </h3>
        <h2 class="mb-10">
            <LinkCustom link="Contact">Zarezerwuj trening przez telefon</LinkCustom>
        </h2>
        <LinkCustom link="Start" :underline="true">Powrót na strone główną</LinkCustom>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    name: 'PageInProgress'
})
</script>
<style lang="">
    
</style>