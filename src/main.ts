import Vue, { VueConstructor } from 'vue'
import * as components from '@/components'
Vue.config.productionTip = false

import './styles/main.scss'

const install = function (Vue: VueConstructor, options: Object = {}) {
  Object.values(components).forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.directive('button-icon', {
    inserted(el) {
      el.classList.add('h-4', 'mr-2', 'stroke-current')
    }
  })
}

// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
  // @ts-ignore
  install(window.Vue)
}

export default Object.assign({}, components, { install })
