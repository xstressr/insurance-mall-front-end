import request from './request'

export function queryByName(loginName) {
  return request.get(
    "/api/slips/getAllByLoginName",
    {
      params: {
        loginName: loginName
      }
    }
  )
}

export function insertSlip(slipInfo) {
  return request.post(
    "/api/slips/insert",slipInfo
  )
}
