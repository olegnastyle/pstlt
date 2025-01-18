import { useIndexStore } from '/store/index';
import { watch } from 'vue';

export default defineNuxtPlugin((nuxtApp) => {
  const mainStore = useIndexStore();

  // Восстановление состояния из localStorage
  const savedState = localStorage.getItem('piniaState');
  if (savedState) {
    Object.assign(mainStore.$state, JSON.parse(savedState));
  }

  // Отслеживание изменений состояния и сохранение в localStorage
  watch(
    () => mainStore.$state,
    (state) => {
      localStorage.setItem('piniaState', JSON.stringify(state));
    },
    { deep: true }
  );
});