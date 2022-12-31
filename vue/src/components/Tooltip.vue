<template>
    <div class="relative">
        <div class="tooltip-trigger" @mouseenter="show" @mouseleave="hide">
            <slot />
        </div>
        <transition name="tooltip-fade">
            <div class="opacity-[0.9] absolute pointer-events-none z-[100]" :class="'tooltip-' + position"
                v-if="visible">
                <button class="px-4 py-2 text-white text-xs rounded-full bg-gray-700 min-w-[50px] w-max max-w-[250px]">
                    {{ text }}
                </button>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Tooltip',
    props: {
        text: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            default: 'top',
            validator: value => ['top', 'right', 'left', 'bottom'].includes(value as string),
        },
    },
    data() {
        return {
            visible: false,
            timeoutId: 0,
        };
    },
    methods: {
        show() {
            this.visible = true;
            setTimeout(() => {
            }, this.timeoutId);
        },
        hide() {
            this.visible = false;
            this.timeoutId = 0.25
        },
    },
}
</script>

<style scoped>
.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
    opacity: 0;
}

.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
    transition: opacity 0.250s ease-out;
}


.tooltip-top {
    top: -2.2em;
    left: 50%;
    translate: -50% -50%;
    /* translate: -50% -50%; */
}

.tooltip-right {
    top: 50%;
    left: 1.5em;
    transform: translateY(-50%);
    /* transform: translateY(-50%); */
}

.tooltip-bottom {
    bottom: -2.2em;
    left: 50%;
    translate: -50% -50%;
    /* translate: -50% -50%; */
}

.tooltip-left {
    top: 50%;
    right: 1.5em;
    transform: translateY(-50%);
    /* transform: translateY(-50%); */
}
</style>