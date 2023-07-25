import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/glodstrong.github.io/table/list',
    method: 'get',
    params
  })
}
