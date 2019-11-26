import Message from '@/components/message/Message'

const createMessageComponent = (Vue, msg, status) => {
  const MessageClass = Vue.extend(Message)
  const vm = new MessageClass({
    propsData: {
      msg,
      status
    }
  })
  vm.$mount()
  document.body.appendChild(vm.$el)
  return vm
}

export default {
  install (Vue, options) {
    Vue.prototype.$message = {
      success (msg) {
        createMessageComponent(Vue, msg, 'success')
      },
      error (msg) {
        createMessageComponent(Vue, msg, 'error')
      }
    }
  }
}
