<template>
    <section class="relative container">
        <div class="flex flex-col lg:flex-row space-x-0 lg:space-x-12 xl:space-x-2">
            <div class="mb-16 lg:max-w-2xl xl:max-w-6xl xl:mb-10 2xl:mt-[3vw]">
                <div class="mb-6">
                    <h3 class="mb-6 font-bold text-gray-900">
                        Przygtuj się na <TextGradient>trening razem</TextGradient> z nami!
                    </h3>
                    <p class="text-gray-700">
                        Zapraszamy do rezerwacji treningu przez nasz system rezerwacji dostępny
                        <Link>tutaj</Link>, do zobaczenia niedługo na kortach! :-)
                    </p>
                </div>
                <div class="flex items-center space-x-6">
                    <Button>Zarezerwuj trening</Button>
                    <Link class="hidden xs:block">Napisz do nas</Link>
                </div>
            </div>
            <div class="flex justify-center lg:justify-end h-full overflow-hidden xl:w-5/6 pointer-events-none">
                <img src="../../assets/full-browser.jpg"
                    class="object-cover object-top w-full -mb-28 sm:-mb-20 lg:-mb-0 xl:-mb-16 rounded shadow-2xl h-auto xl:max-w-[40vw]"
                    alt="" />
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import { Link, Button, TextGradient } from '../../components';
export default {
    components: {
        Link,
        Button,
        TextGradient
    }
}
</script>
<style lang="">
    
</style>