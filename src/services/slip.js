import request from "./request";

export function queryByName(loginName, pageNum, pageSize) {
  return request.get("/api/slips/getAllByLoginName", {
    params: {
      loginName: loginName,
      pageNum: pageNum,
      pageSize: pageSize,
    },
  });
}

export function queryByCompany(loginName, pageNum, pageSize, buyer) {
  return request.get("/api/slips/getAllByCompany", {
    params: {
      company: loginName,
      pageNum: pageNum,
      pageSize: pageSize,
      username: buyer
    },
  });
}

export function insertSlip(slipInfo) {
  return request.post("/api/slips/insert", slipInfo);
}
