import request from './request'

export function queryAll() {
  return request.get(
    "/api/topline/queryAll"
  )
}

export function insert(topline) {
  return request.post(
    "/api/topline/insert",
    topline
  )
}

export function getTopList(pageNum, pageSize) {
  return request.get(
    "/api/topline/getTopList",
    {
      params: {
        pageNum: pageNum,
        pageSize: pageSize
      }
    }
  )
}