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
<script lang="ts">
import { defineComponent } from 'vue';
import { Hero, Offer, WhyUs, Steps, AreYouReady, Footer } from '../containers';
export default defineComponent({
    components: {
        Hero,
        Offer,
        WhyUs,
        Steps,
        AreYouReady,
        Footer
    }
})
</script>
<style lang="scss">

</style>