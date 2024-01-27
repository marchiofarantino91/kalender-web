import moment from 'moment-timezone'
import 'moment/locale/id'   
export default defineNuxtPlugin(() => {
  moment.locale('id') 
  moment.tz.setDefault('Asia/Jakarta')
  return {
    provide: {
      moment,
    },
  }
})