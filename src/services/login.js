import request from './request'

export function vipLogin(loginInfo) {
  return request.post(
    "/api/customer/login",
    loginInfo
  )
}

export function thirdLogin(loginInfo) {
  return request.post(
    "/api/third/login",
    loginInfo
  )
}


export function adminLogin(loginInfo) {
  return request.post(
    "/api/admin/login",
    loginInfo
  )
}

export function vipUpdatePass(updateInfo) {
  return request.post(
    "/api/customer/updatePass",
    updateInfo
  )
}
