<template>
    <section>
        <div class="container flex flex-col lg:flex-row text-primaryWhite">
            <div class="sm:pr-16 mx-auto mb-10 flex-1 md:min-w-[33vw]">
                <h5 class="mb-6 font-extrabold">
                    Treningi squasha dla wszystkich, w każdym wieku!
                </h5>
                <p class="text-gray-400">
                    Nie ważne, czy masz doświadczenie ze squashem lub innymi sportami rakietowymi, my prowadzimy zajęcia
                    dla każdego - niezależnie od Twoich umiejętności czy wieku.
                </p>
                <div class="flex items-center mt-6">
                    <Button class="w-full sm:w-auto">Zapisz się</Button>
                </div>
            </div>
            <div class="grid gap-2 sm:grid-cols-2">
                <router-link to="#" v-for="feature in features">
                    <div class="card rounded-xl py-5 px-0 sm:p-7 hover:bg-gray-800 transition-all duration-75">
                        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <Icon :icon="feature.icon" width="35px" class="text-primaryBlack" />
                        </div>
                        <h6 class="mb-2 font-semibold leading-5 text-gray-200">{{ feature.title }}</h6>
                        <p class="text-gray-400">
                            {{ feature.subtitle }}
                            <span>
                                <Icon icon="ic:twotone-arrow-right-alt" width="25px"
                                    class="inline text-tertiaryColor" />
                            </span>
                        </p>
                    </div>
                </router-link>

            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { Button } from '../../components'
import { Icon } from '@iconify/vue';
export default {
    components: {
        Button,
        Icon
    },

    data() {
        return {
            features: [
                {
                    title: 'Dla juniorów',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor inc sed do eiusmod tempor inc.  sed do eiusmod tempor inc',
                    icon: 'ph:baby-fill'
                },
                {
                    title: 'Dla dorosłych',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor inc sed do eiusmod tempor inc.  sed do eiusmod tempor inc',
                    icon: 'mdi:account-tie'
                },
                {
                    title: 'W parach',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor inc sed do eiusmod tempor inc.  sed do eiusmod tempor inc',
                    icon: 'material-symbols:group'
                },
                {
                    title: 'Grupowe',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor inc sed do eiusmod tempor inc.  sed do eiusmod tempor inc',
                    icon: 'material-symbols:groups-2-rounded'
                },
                {
                    title: 'Indywidualne',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor inc sed do eiusmod tempor inc.  sed do eiusmod tempor inc',
                    icon: 'material-symbols:person'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
h5 {
    font-size: clamp(1.5rem, 3vw, 8rem);
    line-height: clamp(1.5rem, 3.6vw, 8rem);
}

h6 {
    font-size: clamp(1rem, 1.1vw, 8rem);
}

.card {
    p {
        span {
            transition: all 0.075s linear;
        }
    }

    &:hover {
        p {
            span {
                margin-left: 10px;
            }
        }
    }
}
</style>