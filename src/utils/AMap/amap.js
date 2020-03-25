/*
 * 异步创建script标签
 */
export default function MapLoader () {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap)
    } else {
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'https://webapi.amap.com/maps?v=1.4.15&key=5c72b93010b4cfeaa7104c9e92d86014'
      script.onerror = reject
      document.head.appendChild(script)
      setTimeout(function () {
        resolve(window.AMap)
      }, 500)
    }
  })
}
