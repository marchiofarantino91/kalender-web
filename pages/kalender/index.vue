<template>
  <div>
    {{ currentMonth }}
    {{ data }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  computed: {
    currentDate() {
      return this.$moment();
    },
    currentMonth(){
        return this.currentDate.format('M')
    },
    currentYear(){
        return this.currentDate.format('YYYY')
    }
  },
  async created() {
        await $fetch('https://api-harilibur.vercel.app/api?month='+this.currentMonth+'&year='+this.currentYear)
        .then(res => {
            this.data = res
        })
  },
};
</script>
