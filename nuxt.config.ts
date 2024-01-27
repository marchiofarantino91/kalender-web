import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  modules: ['@nuxt/ui','@samk-dev/nuxt-vcalendar'],
  plugins:[
    '~/plugins/moment.ts'
  ]
});
