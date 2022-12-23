<template>
    <main>
        <ContactForm class="section-pt" />
        <FAQ class="section-pb section-pt bg-primaryWhite" />
        <Footer />
    </main>
</template>

<script lang="ts">
import { ContactForm, FAQ, Footer } from '../containers';

export default {
    components: {
        ContactForm,
        FAQ,
        Footer
    }
}
</script>

<style lang="">
    
</style>