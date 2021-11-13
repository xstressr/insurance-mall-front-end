import request from './request'

export function vipRegister(registerInfo) {
  return request.post(
    "/api/customer/register",
    registerInfo
  )
}

export function thirdRegister(registerInfo) {
  return request.post(
    "/api/third/register",
    registerInfo
  )
}


export function adminRegister(registerInfo) {
  return request.post(
    "/api/admin/register",
    registerInfo
  )
}
