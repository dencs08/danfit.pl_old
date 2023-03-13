<template>
    <form class="divide-y divide-gray-200" action="#" method="POST">
        <!-- Profile section -->
        <div>
            <div>
                <h6>Konto</h6>
                <p class="mt-1 text-sm text-gray-500">Tutaj znajdują się wszystkie Twoje informacje
                    o koncie.</p>
            </div>

            <div class="mt-6 mb-2 grid grid-cols-12 gap-6">
                <InputCustom name="first-name" type="input" label="Imie" class="col-span-12 sm:col-span-6" />

                <InputCustom name="surname" type="input" label="Nazwisko" class="col-span-12 sm:col-span-6" />

                <InputCustom name="Email" type="email" label="Email" class="col-span-12 sm:col-span-6" />

                <InputCustom name="Telefon" type="phone" label="Telefon" class="col-span-12 sm:col-span-6" />

            </div>
            <div class="mt-4 flex justify-end pb-4">
                <Button size="xs">Zapisz</Button>
            </div>
        </div>

        <!-- Password -->
        <div class="divide-t divide-gray-200 pt-1">
            <div class="pt-6">
                <h2 class="text-lg font-medium leading-6 text-gray-900 mb-6">Zmień hasło</h2>

                <div class="grid grid-cols-12 gap-6">
                    <InputCustom name="password" type="password" label="Hasło" class="col-span-12 sm:col-span-6" />

                    <InputCustom name="repeat-password" type="password" label="Powtórz hasło"
                        class="col-span-12 sm:col-span-6" />
                </div>
            </div>

            <div class="mt-4 flex justify-end pb-4">
                <Button size="xs">Zapisz</Button>
            </div>
        </div>

        <!-- Privacy section -->
        <div class="divide-y divide-gray-200 pt-6">
            <div>
                <div>
                    <h2 class="text-lg font-medium leading-6 text-gray-900">Prywatność</h2>
                </div>
                <ul role="list" class="mt-2 divide-y divide-gray-200">

                    <SwitchGroup as="li" class="flex items-center justify-between py-4">
                        <div class="flex flex-col">
                            <SwitchLabel as="p" class="text-sm font-medium text-gray-900" passive>
                                Wyświetlaj moje nazwisko publicznie</SwitchLabel>
                            <SwitchDescription class="text-sm text-gray-500">Zaznacz,
                                aby Twoje nazwisko było wyświetlane przy
                                <strong>publicznych</strong> wydarzeniach na, które się
                                zapisaleś.
                            </SwitchDescription>
                        </div>
                        <SwitchCustom :state="user.privateSurName" :icons="false" />
                    </SwitchGroup>

                    <SwitchGroup as="li" class="flex items-center justify-between py-4">
                        <div class="flex flex-col">
                            <SwitchLabel as="p" class="text-sm font-medium text-gray-900" passive>
                                Ustaw konto jako prywatne</SwitchLabel>
                            <SwitchDescription class="text-sm text-gray-500">Zaznacz, aby Twoje
                                konto było ukryte dla wszystkich.</SwitchDescription>
                        </div>
                        <SwitchCustom :state="user.privateAccount" :icons="false" />
                    </SwitchGroup>
                </ul>
            </div>
            <div class="mt-4 flex justify-end py-4 space-x-3">
                <Button size="xs" styling="white">Anuluj</Button>
                <Button size="xs">Zapisz</Button>
            </div>
        </div>
    </form>
</template>
<script lang="ts">
import {
    Switch,
    SwitchDescription,
    SwitchGroup,
    SwitchLabel,
} from '@headlessui/vue'

definePageMeta({
    layout: 'account'
})

export default {


    components: {
        Switch,
        SwitchDescription,
        SwitchGroup,
        SwitchLabel,
    },

    data() {
        return {
            user: {
                name: 'Debbie Lewis',
                handle: 'deblewis',
                email: 'debbielewis@example.com',
                imageUrl:
                    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
                privateSurName: true,
                privateAccount: false,
            },
        }
    }
}
</script>
<style lang="">
    
</style>