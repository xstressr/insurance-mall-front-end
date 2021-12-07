import request from './request'

export function queryClaimsByName(loginName,pageNum,pageSize) {
  return request.get(
    "/api/claim/getAllByloginName",
    {
      params: {
        loginName: loginName,
        pageNum: pageNum,
        pageSize: pageSize
      }
    }
  )
}

export function queryClaimsByCompanyName(companyName,pageNum,pageSize) {
  return request.get(
    "/api/claim/getAllByCompanyName",
    {
      params: {
        companyName: companyName,
        pageNum: pageNum,
        pageSize: pageSize
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

