import request from './request'

export function queryAllCarousel() {
  return request.get(
    "/api/carousel/queryAll"
  )
}