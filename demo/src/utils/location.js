import router from '@/router'
import storage from '@/utils/storage'
class Location {
  constructor () {
    this.data = {}
  }
  // 获取位置信息
  getLocation () {
    const self = this
    // eslint-disable-next-line no-undef
    AMap.plugin('AMap.Geolocation', function () {
      // eslint-disable-next-line no-undef
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000
      })

      geolocation.getCurrentPosition()
      // eslint-disable-next-line no-undef
      AMap.event.addListener(geolocation, 'complete', onComplete)
      // eslint-disable-next-line no-undef
      AMap.event.addListener(geolocation, 'error', onError)

      function onComplete (data) {
        // data是具体的定位信息
        console.log('定位成功信息：', data)
        storage.setItem('location', data.formattedAddress)
        if (data) router.push('/home')
      }

      function onError (data) {
        // 定位出错
        console.log('定位失败错误：', data)
        router.push('/address')
        // 调用ip定位
        self.getLngLatLocation()
      }
    })
  }
  // 获取位置信息
  getLngLatLocation () {
    // eslint-disable-next-line no-undef
    AMap.plugin('AMap.CitySearch', function () {
      // eslint-disable-next-line no-undef
      var citySearch = new AMap.CitySearch()
      citySearch.getLocalCity(function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          // 查询成功，result即为当前所在城市信息
          console.log('通过ip获取当前城市：', result)
          // 逆向地理编码
          // eslint-disable-next-line no-undef
          AMap.plugin('AMap.Geocoder', function () {
            // eslint-disable-next-line no-undef
            var geocoder = new AMap.Geocoder({
              // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
              city: result.adcode
            })
            var lnglat = result.rectangle.split(';')[0].split(',')
            geocoder.getAddress(lnglat, function (status, data) {
              if (status === 'complete' && data.info === 'OK') {
                // result为对应的地理位置详细信息
                console.log(data)
              }
            })
          })
        }
      })
    })
  }
  getcity (city) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-undef
      AMap.plugin('AMap.Autocomplete', function () {
        // 实例化Autocomplete
        var autoOptions = {
          // city 限定城市，默认全国
          city: '全国'
        }
        // eslint-disable-next-line no-undef
        var autoComplete = new AMap.Autocomplete(autoOptions)
        // eslint-disable-next-line no-undef
        autoComplete.search(city, async function (status, result) {
          // 搜索成功时，result即是对应的匹配数据
          resolve(result)
        })
      })
    })
  }
}

export default new Location()
