import Vue from 'vue'
import VueCrontab from './components/VueCrontab.vue'
// import VueCrontab from '../'
import 'element-ui/lib/theme-chalk/index.css'

let app = new Vue({
  el: '.app',
  data () {
    return { name: 'Vue Crontab DEV' }
  },
  components: { VueCrontab },
  template: `
    <div>
      <h1>{{ name }}</h1>
      <VueCrontab />
    </div>
  `,
});

export default app
