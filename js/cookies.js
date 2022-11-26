function cookiesToMap() {
  let cookies_map = new Map()
  let arr = document.cookie.split('; ')
  arr.map((value) => {
    cookies_map.set(...value.split('='))
  })
  return cookies_map
}

function deleteCookies (...names) {
  if (names.length === 0) {
    let cookies = document.cookie.split('; ')
    for (let i = 0; i < cookies.length; i++) {
      document.cookie = cookies[i] + '; expires='+new Date(0).toUTCString()
    }
  } else {
    for (let i = 0; i < names.length; i++) {
      document.cookie = names[i] + '=; expires='+new Date(0).toUTCString()
    }
  }
}
