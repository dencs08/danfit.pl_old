<template>
    <section>
        <div class="container flex flex-col lg:flex-row text-white-primary">
            <div class="sm:pr-16 mx-auto mb-10 flex-1 md:min-w-[33vw]">
                <h5 class="mb-6 font-extrabold">
                    Treningi squasha dla <TextGradient>wszystkich</TextGradient>, w każdym wieku!
                </h5>
                <p class="text-gray-400">
                    Nie ważne, czy masz doświadczenie ze squashem lub innymi sportami rakietowymi, my prowadzimy zajęcia
                    dla każdego - niezależnie od Twoich umiejętności czy wieku.
                </p>
                <div class="flex items-center mt-6">
                    <NuxtLink :to="{ name: 'Offer' }">
                        <Button class="w-full sm:w-auto">Oferta</Button>
                    </NuxtLink>
                </div>
            </div>
            <div class="grid gap-2 sm:grid-cols-2">
                <NuxtLink :to="{ name: 'Offer' }" v-for="feature in features">
                    <div class="card rounded-xl py-5 px-0 sm:p-7 hover:bg-gray-800 transition-all duration-75">
                        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <Icon :name="feature.icon" class="text-black-primary h-8 w-8" />
                        </div>
                        <h6 class="mb-2 font-semibold leading-5 text-gray-200">{{ feature.title }}</h6>
                        <p class="text-gray-400">
                            {{ feature.subtitle }}
                            <span>
                                <Icon name="ic:twotone-arrow-right-alt" width="25px" class="inline text-color-tertiary" />
                            </span>
                        </p>
                    </div>
                </NuxtLink>

            </div>
        </div>
    </section>
</template>
<script lang="ts">
export default {
    data() {
        return {
            features: [
                {
                    title: 'Dla dzieci',
                    subtitle: 'Rozpocznij przygodę z squashem już od najmłodszych lat - specjalnie dostosowane treningi dla dzieci!',
                    icon: 'ph:baby-fill'
                },
                {
                    title: 'Dla dorosłych',
                    subtitle: 'Zwiększ swoje umiejętności i zrób krok w kierunku squasha - treningi dla dorosłych na najwyższym poziomie.',
                    icon: 'mdi:account-tie'
                },
                {
                    title: 'Indywidualne',
                    subtitle: 'Skup się na swoim rozwoju i dostosuj trening do własnych potrzeb - treningi indywidualne to idealne rozwiązanie dla tych, którzy chcą osiągnąć swój cel szybciej.',
                    icon: 'material-symbols:person'
                },
                {
                    title: 'Grupowe',
                    subtitle: 'Dołącz do grupy i baw się dobrze podczas treningu - treningi grupowe to nie tylko doskonała okazja do rozwoju, ale też do zawierania nowych znajomości.',
                    icon: 'material-symbols:groups-2-rounded'
                },
                {
                    title: 'W parach',
                    subtitle: 'Graj z partnerem i zmień swoją rutynę treningową treningi w parach to świetna zabawa i doskonały trening.',
                    icon: 'material-symbols:group'
                },
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