<template>
    <section class="h-screen">
        <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <img class="mx-auto h-8 w-auto" src="../assets/img/logos/danfit_blue_logo_full_color.svg"
                    alt="danfit logo" />
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Zarejestruj nowe konto
                </h2>
            </div>

            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form class="space-y-6" action="#" method="POST">
                        <InputCustom type="email" name="email" label="Email" />
                        <InputCustom type="password" name="password" label="Hasło" />
                        <InputCustom type="password-repeat" name="password-repeat" label="Powtórz hasło" />

                        <div>
                            <NuxtLink :to="{ name: 'AccountSettings' }">
                                <Button type="submit" class="btn-xs w-full">Zarejestruj</Button>
                            </NuxtLink>
                        </div>
                    </form>

                    <!-- hide it for time being -->
                    <div v-if="false" class="mt-6">
                        <div class="relative">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300" />
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="bg-white px-2 text-gray-500">Lub zaloguj przez</span>
                            </div>
                        </div>

                        <div class="mt-6">
                            <div>
                                <a href="#"
                                    class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                                    <span class="sr-only">Zaloguj przez facebook</span>
                                    <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                    <p class="text-gray-500 text-center text-xs mt-4">
                        Klikając "zarejestruj się", zgadzasz się z naszymi
                        <LinkCustom link="Terms">warunkami korzystania</LinkCustom>,
                        <LinkCustom link="Privacy">polityką prywatności</LinkCustom>
                        i
                        <LinkCustom link="Privacy">polityką ciasteczek</LinkCustom>.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
definePageMeta({
    name: 'Register'
})
</script>
<style lang="scss"></style>