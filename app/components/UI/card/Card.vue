<script setup lang="ts"></script>

<template>
    <div class="UICard">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.UICard {
    display: inline-block;
    background-color: $white-color;
    box-shadow: 0 0 6px -3px #000;
    padding: 20px;
    border-radius: 10px;
}
</style>
