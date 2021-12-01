import request from './request'

export function queryGoodsByName(loginName) {
  return request.get(
    "/api/claim/getAllByloginName",
    {
      params: {
        loginName: loginName
      }
    }
  )
}

export function changeStatus(params) {
  return request.get(
    "/api/claim/updateStatus",
    {
      params: params
    }
  )
}

export function insertClaim(claimInfo) {
  return request.post(
    "/api/claim/insert",
    claimInfo
  )
}