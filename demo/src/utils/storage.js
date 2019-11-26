const storage = {
  setItem (name, data) {
    typeof data === 'object' ? window.localStorage.setItem(name, JSON.stringify(data)) : window.localStorage.setItem(name, data)
  },

  getItem (name) {
    if (window.localStorage.getItem(name).indexOf('[') !== -1 || window.localStorage.getItem(name).indexOf('{') !== -1) {
      return JSON.parse(window.localStorage.getItem(name))
    }

    return window.localStorage.getItem(name)
  }
}

export default storage
