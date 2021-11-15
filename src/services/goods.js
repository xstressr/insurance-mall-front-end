import request from './request'

export function queryGoodsByName(loginName) {
  return request.get(
    "/apis/goods/getAllByloginName",
    {
      params: {
        loginName: loginName
      }
    }
  )
}