<script setup lang="ts">

import type { Size } from '~/types/size';

const props = withDefaults(defineProps<{
    color?: string
    size?: Size
}>(), {
	color: 'accent',
	size: 'm'
});

defineEmits<{
    (e: 'click'): void
}>();

const classList = computed(() => [
	{
		[`--${props.color}-color`]: props.color,
		[`--${props.size}-size`]: props.size,
	},
]);</script>

<template>
    <div class="UI-button">
        <button :class="['button', classList]" @click="$emit('click')">
            <slot name="left-icon"/>
            <slot name="button-text"/>
            <slot name="right-icon"/>
        </button>
    </div>
</template>

<style scoped lang="scss">
.UI-button {
    display: flex;
    align-items: center;
    justify-content: center;
}

.button {
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;

    // color
    &.--accent-color {
        background-color: $accent-color;
        color: $white-color;
    }

    &.--white-color {
        background-color: $white-color;
        color: $accent-color;
    }

    // size
    &.--l-size {
        padding: 10px 16px;
    }

    &.--m-size {
        padding: 8px 14px;
    }

    &.--s-size {
        padding: 4px 8px;
    }
}
</style>
