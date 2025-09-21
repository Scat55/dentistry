<template>
    <div class="container">
        <slot/>
    </div>
</template>

<style scoped lang="scss">
.container {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 10px;

    @media (min-width: 768px) {
        padding: 0 40px;
    }

    @media (min-width: 1200px) {
        padding: 0 80px;
    }
}
</style>
