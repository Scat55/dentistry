<script setup lang="ts">
import { UIButton } from '~/components/UI/button';
import Container from '~/components/Container.vue';
import { NavList } from '~/types/constants/navList';
import MobileHeader from '~/components/header/MobileHeader.vue';
import { useScreen } from '~/composables/useScreen';

const { width } = useScreen();

const isOpenModal = ref(false);

</script>

<template>
    <Container>
        <div v-if="width >= 769" class="header-conteiner">
            <Header :nav-menu="NavList"/>
        </div>

        <div v-if="width < 769" class="header-mobile-container">
            <SvgoLogo class="header-mobile_logo"/>
            <UIButton @click="isOpenModal = true">
                <template #button-text>
                    <SvgoMenu/>
                </template>
            </UIButton>
            <MobileHeader
                    v-if="isOpenModal"
                    class="header-mobile"
                    :nav-menu="NavList"
                    @close="isOpenModal = false"/>
        </div>
        <UIButton>
            <template #button-text>
                Запись на консультацию
            </template>
        </UIButton>
    </Container>
</template>

<style scoped lang="scss">
.header-conteiner {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.header-mobile-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-mobile {
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;

    &_logo {
        width: 225px;
        height: 57px;
        color: $accent-color;
    }
}

.header-close-btn_icon {
    color: $white-color;
}
</style>
