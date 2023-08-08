import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/glodstrong.github.io/materials/list',
    method: 'get',
    params
  })
}
