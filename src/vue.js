import Vue from 'vue'
import { axios, firebase } from './services'

Vue.prototype.$http = axios
Vue.prototype.$firebase = firebase

export default Vue
