import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/glodstrong.github.io/outsourcing/list',
    method: 'get',
    params
  })
}
