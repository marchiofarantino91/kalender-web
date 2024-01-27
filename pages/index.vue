<template>
  <section class="bg-white">
    <div
      class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
    >
      <h1
        class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
      >
        Website Cek Kalender Libur Tahunan
      </h1>
      <p
        class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48"
      >
        Sebuah website yang dapat digunakan untuk cek hari libur.
      </p>
      <div>
        <div class="flex justify-center"> 
            <date-picker />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DatePickerVue from "../components/DatePicker.vue"
export default{
    components:{
        'date-picker':DatePickerVue
    },
    data(){
        return {

        }
    },
    computed:{
        currentDate(){

        }
    }
}
</script>