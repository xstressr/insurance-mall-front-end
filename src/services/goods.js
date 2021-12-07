import request from "./request";

export function queryGoodsByName(loginName, pageNum, pageSize) {
  return request.get("/api/goods/getAllByloginName", {
    params: {
      loginName: loginName,
      pageNum: pageNum,
      pageSize: pageSize,
    },
  });
}

// export function queryAllGoods() {
//   return request.get(
//     "/api/goods/getAll"
//   )
// }

export function queryGoodsAbbreByName(loginName, pageNum, pageSize) {
  return request.get("/api/goods/getAllAbbreByloginName", {
    params: {
      loginName: loginName,
      pageNum: pageNum,
      pageSize: pageSize,
    },
  });
}

export function changeStatus(goodsName, status) {
  return request.get("/api/goods/updateStatus", {
    params: {
      goodName: goodsName,
      status: status,
    },
  });
}

export function insertGoods(goodInfo) {
  return request.post("/api/goods/insert", goodInfo);
}

export function queryGoodDetail(goodname) {
  return request.get("/api/goods/detail", {
    params: {
      goodName: goodname,
    },
  });
}

export function queryAllByType(type, pageNum, pageSize) {
  return request.get("/api/goods/getAllByType", {
    params: {
      type: type,
      pageNum: pageNum,
      pageSize: pageSize,
    },
  });
}

export function findAll(pageNum, pageSize) {
  return request.get("/api/goods/getGoodsList", {
    params: {
      pageNum: pageNum,
      pageSize: pageSize,
    },
  });
}

export function findAllNoUp(pageNum, pageSize) {
  return request.get("/api/goods/getNoUpGoodsList", {
    params: {
      pageNum: pageNum,
      pageSize: pageSize,
    },
  });
}
