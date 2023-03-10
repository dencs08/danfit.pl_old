<template>
    <footer class="pt-14 pb-8 bg-gray-900">
        <div class="container md:flex md:justify-between md:space-x-10">
            <div class="mb-24 md:mb-0">
                <router-link to="/start" class="flex items-center">
                    <img src="../assets/img/danfit_logo_white.svg" class="mr-3 h-8" alt="danfit Logo" />
                </router-link>

                <div class="mt-8">
                    <p class="text-white">Zapisz się do naszego newstellera</p>
                    <p class="text-gray-500">(informacje o eventach np. turnieje)</p>

                    <div class="mt-4">
                        <form @submit.prevent="subscribeToNewsletter" action="#">
                            <input v-model="newsletterEmail" type="text" id="email"
                                class="border text-sm rounded-full block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Email" required>
                            <Button type="submit" class="mt-2 float-right" size="xs">Zapisz</Button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-16 sm:grid-cols-3">
                <div>
                    <h2 class="mb-6 text-sm font-semibold uppercase text-white">Menu</h2>
                    <ul class="text-gray-400 space-y-4">
                        <li v-for="link in menu">
                            <router-link :to="{ name: link.to }" class="hover:underline">{{ link.name }}</router-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold uppercase text-white">Kontakt</h2>
                    <ul class="text-gray-400 space-y-4">
                        <li v-for="el in contact">
                            <span>{{ el.name }}</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold uppercase text-white">O Stronie</h2>
                    <ul class="text-gray-400 space-y-4">
                        <li v-for="link in privacy">
                            <router-link :to="{ name: link.to }" class="hover:underline">{{ link.name }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="container my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <div class="container flex flex-col sm:flex-row items-center sm:justify-between">
            <span class="text-sm  sm:text-center text-gray-400">© 2022
                <router-link to="/start" class="hover:underline">
                    danfit.
                </router-link> Wszelkie prawa zastrzeżone.
            </span>
            <div class="flex mt-4 space-x-6 justify-center sm:mt-0">
                <a href="https://www.facebook.com/danfitpl" target="_blank" rel="noopener"
                    class="text-gray-500 hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">Facebook page</span>
                </a>
            </div>
        </div>
    </footer>
</template>
<script lang="ts">
import { axiosClient } from '../ts/axios';
import { toast } from '../ts/toast';

export default {
    data() {
        return {
            menu: [
                { name: 'Start', to: 'Start' },
                { name: 'Oferta', to: 'Offer' },
                { name: 'O nas', to: 'AboutUs' },
                { name: 'Kontakt', to: 'Contact' },
                { name: 'Zarezerwuj trening', to: 'Calendar' },
            ],
            contact: [
                { name: 'biuro@danfit.pl', to: '#' },
                { name: '882 031 130', to: '#' },
            ],
            privacy: [
                { name: 'Polityka prywatności', to: 'Privacy' },
                { name: 'Warunki korzystania', to: 'Terms' },
            ],

            newsletterEmail: ''
        }
    },

    methods: {
        async subscribeToNewsletter(event: any) {
            event.preventDefault();
            axiosClient.post('/newsletter', {
                email: this.newsletterEmail
            })
                .then(response => {
                    console.log(response);
                    toast('Dodaliśmy Cię do newslettera', 'Dziękujemy!', '')
                    event.target.reset();
                })
                .catch(error => {
                    console.error(error);
                    toast('Ups! Coś poszło nie tak..', 'Spróbuj ponownie poźniej, lub skontaktuj się bezpośrednio na biuro@danfit.pl', 'warning')
                });

            // let test = axiosClient.get('/test')
            // console.log(test);

        }
    }
}
</script>
<style lang="scss"></style>