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

export function queryAllGoods() {
  return request.get(
    "/api/goods/getAll"
  )
}

export function queryGoodsAbbreByName(loginName) {
  return request.get(
    "/api/goods/getAllAbbreByloginName",
    {
      params: {
        loginName: loginName
      }
    }
  )
}

export function changeStatus(goodsName, status) {
  return request.get(
    "/api/goods/updateStatus",
    {
      params: {
        goodName: goodsName,
        status: status
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