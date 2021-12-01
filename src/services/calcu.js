import request from './request'

export function calcuPrice(params) {
  return request.get(
    "/api/calcu/common",
    {
      params: params
    }
  )
}