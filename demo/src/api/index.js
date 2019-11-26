import request from '../service/index'
// import router from '../router'

const api = {
  home: {
    getbanner: (navIndex) => request.get(`/api/home/banner?type=${navIndex + 1}`),
    geticonlist: (navIndex) => request.get(`/api/home/iconlist?type=${navIndex + 1}`),
    getshop: (pages) => request.get(`/api/home/shop?pages=${pages}`)
  },
  classify: {
    getclassifylist: () => request.get(`/api/classify/classifylist`),
    getclassifyshop: (shopid) => request.get(`/api/classify/classifyshop?id=${shopid}`),
    getdetails: (id) => request.get(`/api/classify/getdetails?id=${id}`)
  },
  user: {
    getauthcode: (phone) => request.get(`/api/user/auth_code?phone=${phone}`),
    login: (phone, authcode) => request.post(`/api/user/login`, {phone, authcode}),
    getinfo: () => request.get(`/api/user/info`)
  },
  address: {
    insertaddress: (data) => request.post('/api/address/setaddress', data),
    deleteaddress: (id) => request.delete(`/api/address/setaddress/${id}`),
    getaddress: (id) => request.get(`/api/address/setaddress/${id}`),
    updateaddress: (id, data) => request.put(`/api/address/setaddress/${id}`, data)
  },
  shop: {
    insertshop: (shopid) => request.post('/api/shop', {shopid}),
    deleteshop: (id) => request.delete('/api/shop/' + id),
    getshop: () => request.get('/api/shop'),
    update: (id, data) => request.put('/api/shop/' + id, data),
    show: (id, pitch) => request.get('/api/shop/' + id + '?pitch=' + pitch),
    commodity: () => request.get('/api/home/commodity')
  }
}

export default api
