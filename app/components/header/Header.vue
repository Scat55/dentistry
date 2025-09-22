<script setup lang="ts">
import type NavHeaderMenu from '@/types/header';

withDefaults(defineProps<{
    navMenu?: NavHeaderMenu[]
}>(), {
	navMenu: () => []
});
</script>

<template>
    <header class="header">
        <nav class="header-nav">
            <ul class="header-list">
                <li v-for="nav in navMenu.slice(0,2)" :key="nav.id" class="header-list_item">
                    {{ nav.title }}
                </li>
                <SvgoLogo class="logo"/>
                <li v-for="nav in navMenu.slice(2,4)" :key="nav.id" class="header-list_item">
                    {{ nav.title }}
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
.header {
    background-color: $grey-color;
    padding: 10px 40px;
    border-radius: 10px;

    &-list {
        display: flex;
        align-items: center;
        gap: 45px;
    }
}

.logo {
    width: 225px;
    height: 57px;
    color: $accent-color;
}
</style>
