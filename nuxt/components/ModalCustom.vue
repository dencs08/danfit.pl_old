<template >
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="toggleModal">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full justify-center p-4 text-center items-center sm:p-0 divide-y">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl divide-y">

                            <ModalJoinTraining @toggleModal="toggleModal" :content="content" :hour="hour" :coach="coach"
                                v-if="currentContent === 'join'" />

                            <ModalEditTraining @toggleModal="toggleModal" :content="content" :hour="hour" :coach="coach"
                                v-if="currentContent === 'edit'" />

                            <ModalNewTraining @toggleModal="toggleModal" :content="content" :hour="hour" :coach="coach"
                                v-if="currentContent === 'new'" />

                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
<script lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Button, SwitchCustom, Tooltip, ModalEditTraining, ModalNewTraining, ModalJoinTraining } from '../components';
import { Icon } from '@iconify/vue';

function setAgePreference(age: String): string {
    switch (age) {
        case 'Adult':
            return 'Dorośli';
        case 'Junior':
            return 'Junior';
        case 'Kids':
            return 'Dzieci';
        default:
            return '';
    }
}

function setSkillPreference(skill: String): string {
    switch (skill) {
        case 'Beginner':
            return 'Początkujący';
        case 'Intermediate':
            return 'Średni';
        case 'Advanced':
            return 'Zaawansowany';
        default:
            return '';
    }
}

function setSizePreference(size: Number): string {
    switch (size) {
        case 1:
            return '1 osoba';
        case 2:
            return '2 osoby';
        case 3:
            return '3 osoby';
        case 4:
            return '4 osoby';
        case 5:
            return '5 osób';
        default:
            return '';
    }
}

export default {
    components: {
        Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, SwitchCustom, Button, Icon, Tooltip, ModalEditTraining, ModalNewTraining, ModalJoinTraining
    },

    data() {
        return {
            currentContent: '',

            open: false,

            content: {
                infoButton: '',
                title: '',
                underTitle: '',
                lookingForEnabled: false,

                agePreference: { display: '', tooltip: '' },
                skillPreference: { display: '', tooltip: '' },
                sizePreference: { display: '', tooltip: '' },
            },
            coach: {
                name: '',
                phone: '',
                email: '',
            },
            hour: {
                lookingFor: 0,
                confirmed: false,
                time: 0,
                date: 0,
                location: '',
                myBooked: false,
                agePreference: '',
                skillPreference: '',
                sizePreference: 0,
                people: [{
                    name: ''
                }]
            },
        }
    },
    methods: {
        toggleModal() {
            this.open = !this.open;
        },
        showJoinContent() {
            this.currentContent = 'join';
            this.toggleModal();
        },
        showEditContent() {
            this.currentContent = 'edit';
            this.toggleModal();
        },
        showNewContent() {
            this.currentContent = 'new';
            this.toggleModal();
        },
        updateModalInfo(hour: any, coach: any) {
            this.hour = hour;
            this.coach = coach;

            this.hour.confirmed ? this.content.infoButton = 'Potwierdzony' : this.content.infoButton = 'Nie potwierdzony';
            this.hour.lookingFor >= 1 ? this.content.lookingForEnabled = true : this.content.lookingForEnabled = false;

            this.content.agePreference.display = setAgePreference(this.hour.agePreference)
            this.content.agePreference.tooltip = 'Opis!'

            this.content.skillPreference.display = setSkillPreference(this.hour.skillPreference)
            this.content.skillPreference.tooltip = 'Opis!'

            this.content.sizePreference.display = setSizePreference(this.hour.sizePreference)
            this.content.sizePreference.tooltip = 'Opis!'

            let names = [];
            for (let i = 0; i < hour.people.length; i++) {
                let person = hour.people[i].name;
                person = ' ' + person;
                names.push(person);
            }

            if (hour.myBooked && hour.confirmed) {
                this.content.title = 'Jesteś już zapisany!';
                this.content.underTitle = 'Wszystko załatwione, do zobaczenia na treningu!';
            }
            if (hour.myBooked && !hour.confirmed) {
                this.content.title = 'Jesteś zapisany, ale trening jeszcze nie został potwierdzony.';
                this.content.underTitle = 'Następny krok to potwierdzenie treningu przez trenera, poczekaj chwilę, jeśli trening nie zostanie potwierdzony, skontaktuj się z trenerem';
            }
        }
    },
}
</script>


  
<style lang="">
    
</style>
