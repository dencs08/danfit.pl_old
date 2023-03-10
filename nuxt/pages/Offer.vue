<template>
    <div class="">
        <div class="relative bg-gray-800 pb-32 mt-16 ">
            <div class="absolute inset-0">
                <img class="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
                    alt="" />
                <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
            </div>
            <div class="container relative py-24">
                <h3 class="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Dla Kogo?</h3>
                <p class="mt-6 max-w-3xl text-xl text-gray-300">Nie ważne, czy masz doświadczenie ze squashem lub innymi
                    sportami rakietowymi, my prowadzimy zajęcia dla każdego - niezależnie od Twoich umiejętności czy
                    wieku. </p>
            </div>
        </div>
        <div class="container">
            <section class="section-pb">
                <div>
                    <ForWho />
                </div>
            </section>
            <!-- <section class="section-pb">
                <WeWorkWith />
            </section> -->
            <section class="section-pb">
                <WhereWeWork />
            </section>
            <section class="pb-14">
                <CTABookAnHour />
            </section>
        </div>
        <Footer />
    </div>
</template>
<script lang="ts">
</script>
<style lang="">
    
</style>