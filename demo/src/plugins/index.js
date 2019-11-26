import Tabbar from '@/components/tabbar/index'
import tabNav from '@/components/tabnav/index'
import scrollView from '@/components/scrollview/index'
import List from '@/components/list/index'
import classifyList from '@/components/classifylist/index'
import classifyShop from '@/components/classifyshop/index'
import loginFrom from '@/components/loginfrom/index'
import loginHead from '@/components/loginhead/index'
import shopItem from '@/components/shopitem/index'
import Button from '@/components/button/Button'

let overallComponent = {
  Tabbar,
  tabNav,
  scrollView,
  List,
  classifyList,
  classifyShop,
  loginFrom,
  loginHead,
  shopItem,
  Button
}

export default {
  install (Vue, options) {
    for (let k in overallComponent) {
      Vue.component(k, overallComponent[k])
    }
  }
}
