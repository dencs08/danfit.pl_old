<template>
    <main>
        <Hero />
        <Offer id="offer" class="bg-gray-900 section-pt section-pb" />
        <Steps id="steps" class="section-pt section-pb" />
        <WhyUs id="whyUs" />
        <AreYouReady class="section-pt" />
        <Footer />
    </main>
</template>
<script lang="ts" setup>
definePageMeta({
    name: 'Start',
})
</script>
<style lang="scss"></style>