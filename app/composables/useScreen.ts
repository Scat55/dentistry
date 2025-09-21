import { ref, onMounted, onUnmounted } from 'vue';

export function useScreen() {
    const width = ref(0);

    const updateWidth = () => {
        width.value = window.innerWidth;
    };

    onMounted(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateWidth);
    });

    // Флаги
    const isMobile = computed(() => width.value <= 768);
    const isTablet = computed(() => width.value < 1200);
    const isDesktop = computed(() => width.value >= 1200);

    return {
        width,
        isMobile,
        isTablet,
        isDesktop,
    };
}
