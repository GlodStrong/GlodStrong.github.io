import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/glodstrong.github.io/project/list',
    method: 'get',
    params
  })
}

