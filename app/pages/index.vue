<script setup lang="ts">
import { UIButton } from '~/components/UI/button';
import Container from '~/components/Container.vue';
import { NavList } from '~/types/constants/navList';
import MobileHeader from '~/components/header/MobileHeader.vue';
import { useScreen } from '~/composables/useScreen';
import { UITypography } from '~/components/UI/typography';

const { width } = useScreen();

const isOpenModal = ref(false);
</script>

<template>
    <Container>
        <div v-if="width >= 769" class="header-conteiner">
            <Header :nav-menu="NavList" />
        </div>

        <div v-if="width < 769" class="header-mobile-container">
            <SvgoLogo class="header-mobile_logo" />
            <UIButton @click="isOpenModal = true">
                <template #button-text>
                    <SvgoMenu />
                </template>
            </UIButton>
            <MobileHeader
                v-if="isOpenModal"
                class="header-mobile"
                :nav-menu="NavList"
                @close="isOpenModal = false"
            />
        </div>
        <UITypography class="header-title" tag-name="h1" bold>
            Установка брекетов в Москве
        </UITypography>
        <UITypography class="header-subtitle" tag-name="p" size="l">
            Современные технологии. Доступные цены. Без боли!
        </UITypography>
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

.header {
    &-mobile {
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

    &-close-btn_icon {
        color: $white-color;
    }

    &-title {
        text-align: center;
    }

    &-subtitle {
        text-align: center;
    }
}
</style>
