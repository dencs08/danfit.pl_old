<template>
    <section class="relative">
        <div class="container shadow-2xl">
            <div class="relative bg-white">
                <h2 id="contact-heading" class="sr-only">Skontaktuj się z nami</h2>

                <div class="grid grid-cols-1 lg:grid-cols-3">
                    <div
                        class="relative overflow-hidden bg-gradient-to-b from-color-secondary to-emerald-500 py-10 px-6 sm:px-10 xl:p-12 text-white-primary">

                        <h3 class="text-lg font-medium">Informacje kontaktowe</h3>
                        <p class="mt-6">
                            Poniżej znajduje się sekcja z najczęściej zadawanymi pytaniami - może tam znajdziesz
                            odpowiedź na swoje pytanie. Jeśli jednak masz inne pytanie lub po prostu chciałbyś się
                            czegoś dowiedzieć, napisz do nas a my
                            odpowiemy tak szybko jak to możliwe.
                        </p>
                        <dl class="mt-8 space-y-6">
                            <dt><span class="sr-only">Phone number</span></dt>
                            <dd class="flex items-center">
                                <Icon name="ic:round-phone-enabled" class="w-4 h-4" />
                                <a href="tel:+48882031130"><span class="ml-3 underline">+48 882 031 130</span></a>
                            </dd>
                            <dt><span class="sr-only">Email</span></dt>
                            <dd class="flex items-center">
                                <Icon name="ic:baseline-mail" class="w-4 h-4" />
                                <a href="mailto:biuro@danfit.pl&subject=Zapytanie do danfit.pl&body=. . ."><span
                                        class="ml-3 underline">biuro@danfit.pl</span></a>
                            </dd>
                        </dl>
                        <ul role="list" class="mt-8 flex space-x-12">
                            <li>
                                <a class="text-teal-200 hover:text-teal-100" href="https://www.facebook.com/danfitpl"
                                    target="_blank">
                                    <span class="sr-only">Facebook</span>
                                    <Icon name="ic:baseline-facebook" class="w-8 h-8" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Contact form -->
                    <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                        <h3 class="text-lg font-medium text-gray-900">Napisz do nas</h3>
                        <form ref="contactForm" @submit.prevent="submitForm" action="#" method="POST"
                            class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

                            <InputCustom v-model="email.name" label="Imie" type="firstname" name="firstname"
                                placeholder="Jan" :required="true" />
                            <InputCustom v-model="email.surname" label="Nazwisko" type="surname" name="surname"
                                placeholder="Kowalski" :optional="true" />
                            <InputCustom v-model="email.email" label="Email" type="email" name="email"
                                placeholder="twoj@email.com" :required="true" />
                            <InputCustom v-model="email.phone" label="Telefon" type="phone" name="phone"
                                placeholder="123 123 123" :optional="true" />
                            <InputCustom v-model="email.subject" label="Temat" type="subject" name="subject"
                                placeholder="Temat wiadomości" class="sm:col-span-2" :required="true" />

                            <TextAreaCustom v-model="email.message" :rows="4" name="message" label="Wiadomość"
                                placeholder=". . ." :required="true" />

                            <div class="sm:col-span-2 sm:flex sm:justify-end">
                                <Button type="submit">Wyślij</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
let email = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
}

async function submitForm(event: any) {
    event.preventDefault();
    console.log(email);

    try {
        let response = await useEmailContactForm('/emailContactForm', {
            name: email.name,
            surname: email.surname,
            email: email.email,
            phone: email.phone,
            subject: email.subject,
            message: email.message,
        })
        toast('Wiadomośc wysłana!', 'Sprawdź swoją skrzynkę po email z potwierdzeniem, do usłyszenia wkrótce! :-)', '')
        // console.log(response);
    } catch (error) {
        toast('Ups! Coś poszło nie tak..', 'Spróbuj ponownie poźniej, lub skontaktuj się bezpośrednio na biuro@danfit.pl', 'warning')
        // console.log(error);
    }
}
</script>
<style lang="">
    
</style>