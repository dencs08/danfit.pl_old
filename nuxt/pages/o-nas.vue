<template>
    <div>
        <div class="mt-16">
            <section class="section-pb">
                <WhoAreWe />
            </section>
            <div class="container">
                <section class="section-pb">
                    <WhyUs />
                </section>
                <section class="section-pb">
                    <HowWeWork />
                </section>
                <section class="pb-14">
                    <CTABookAnHour />
                </section>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    name: 'AboutUs',
})
</script>
<style lang="scss"></style>