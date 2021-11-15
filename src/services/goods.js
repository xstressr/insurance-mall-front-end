import request from './request'

export function queryGoodsByName(loginName) {
  return request.get(
    "/api/goods/getAllByloginName",
    {
      params: {
        loginName: loginName
      }
    }
  )
}

export function insertGoods(goodInfo) {
  return request.post(
    "/api/goods/insert",
    goodInfo
  )
}