<script setup lang="ts">
import type NavHeaderMenu from '~/types/header';
import { UIButton } from '~/components/UI/button';


withDefaults(defineProps<{
    navMenu?: NavHeaderMenu[]
}>(), {
	navMenu: [] as NavHeaderMenu[]
});

const emit = defineEmits<{
    (e: 'close'): void
}>();

const closeMenu = () => {
	emit('close');
};
</script>

<template>
    <header class="header">
        <nav class="header-nav">
            <UIButton color="white" size="s" class="header-close-btn" @click="closeMenu">
                <template #button-text>
                    <SvgoClose class="header-close-btn_icon"/>
                </template>
            </UIButton>
            <ul class="header-list">

                <li v-for="nav in navMenu" :key="nav.id" class="header-list_item">
                    {{ nav.title }}
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
.header {
    background-color: $accent-color;
    padding: 10px 20px;
    border-radius: 10px;
    color: $white-color;

    &-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    &-close-btn {
        display: flex;
        justify-content: flex-end;

        &_icon {
            background-color: $white-color;
            color: $accent-color;
        }
    }
}
</style>
