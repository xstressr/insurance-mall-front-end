import request from './request'

export function vipLogin(loginInfo) {
  return request.post(
    "/apis/customer/login",
    loginInfo
  )
}

export function thirdLogin(loginInfo) {
  return request.post(
    "/apis/third/login",
    loginInfo
  )
}


export function adminLogin(loginInfo) {
  return request.post(
    "/apis/admin/login",
    loginInfo
  )
}
