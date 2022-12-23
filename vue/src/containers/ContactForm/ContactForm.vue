<template>
    <section class="relative">
        <div class="container shadow-2xl">
            <div class="relative bg-white">
                <h2 id="contact-heading" class="sr-only">Skontaktuj się z nami</h2>

                <div class="grid grid-cols-1 lg:grid-cols-3">
                    <div
                        class="relative overflow-hidden bg-gradient-to-b from-secondaryColor to-emerald-500 py-10 px-6 sm:px-10 xl:p-12 text-primaryWhite">

                        <h3 class="text-lg font-medium">Informacje kontaktowe</h3>
                        <p class="mt-6">
                            Poniżej znajduje się sekcja z najczęściej zadawanymi pytaniami - może tam znajdziesz
                            odpowiedź na swoje pytanie. Jeśli jednak masz inne pytanie lub po prostu chciałbyś się
                            czegoś dowiedzieć, napisz do nas a my
                            odpowiemy tak szybko jak to możliwe.
                        </p>
                        <dl class="mt-8 space-y-6">
                            <dt><span class="sr-only">Phone number</span></dt>
                            <dd class="flex">
                                <Icon icon="ic:round-phone-enabled" width="25px" />
                                <span class="ml-3">+48 882 031 130</span>
                            </dd>
                            <dt><span class="sr-only">Email</span></dt>
                            <dd class="flex">
                                <Icon icon="ic:baseline-mail" width="25px" />
                                <span class="ml-3">biuro@danfit.pl</span>
                            </dd>
                        </dl>
                        <ul role="list" class="mt-8 flex space-x-12">
                            <li>
                                <a class="text-teal-200 hover:text-teal-100" href="https://www.facebook.com/danfitpl"
                                    target="_blank">
                                    <span class="sr-only">Facebook</span>
                                    <Icon icon="ic:baseline-facebook" width="25px" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Contact form -->
                    <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                        <h3 class="text-lg font-medium text-warm-gray-900">Napisz do nas</h3>
                        <form action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

                            <InputCustom label="Imie" type="firstname" name="firstname" placeholder="Jan"
                                :required="true" />
                            <InputCustom label="Nazwisko" type="surname" name="surname" placeholder="Kowalski"
                                :optional="true" />
                            <InputCustom label="Email" type="email" name="email" placeholder="twoj@email.com"
                                :required="true" />
                            <InputCustom label="Telefon" type="phone" name="phone" placeholder="123 123 123"
                                :optional="true" />
                            <InputCustom label="Temat" type="subject" name="subject" placeholder="Temat wiadomości"
                                class="sm:col-span-2" :required="true" />

                            <TextAreaCustom :rows="4" name="message" label="Wiadomość" placeholder=". . ."
                                :required="true" />

                            <div class="sm:col-span-2 sm:flex sm:justify-end">
                                <Button>Wyślij</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { Icon } from '@iconify/vue';
import { Link, Button, InputCustom, TextAreaCustom } from '../../components';
export default {
    components: {
        Icon,
        Button,
        Link,
        InputCustom,
        TextAreaCustom
    },

    data() {
        return {

        }
    }
}
</script>
<style lang="">
    
</style>