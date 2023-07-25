import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/glodstrong.github.io/schedule/list',
    method: 'get',
    params
  })
}

export function getGrpList(params) {
  return request({
    url: '/glodstrong.github.io/schedule/grpList',
    method: 'post',
    params
  })
}
