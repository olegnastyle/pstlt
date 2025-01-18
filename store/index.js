import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
  // рекомендуется стрелочная функция для полного вывода типа
  state: () => ({
    count: 0,
  }),
})

