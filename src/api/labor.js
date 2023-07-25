import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/glodstrong.github.io/labor/list',
    method: 'get',
    params
  })
}
