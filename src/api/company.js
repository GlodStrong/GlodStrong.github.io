import request from '@/utils/request'

export function getCompanyList(params) {
  return request({
    url: '/vue-admin-template/companies/list',
    method: 'get',
    params
  })
}

export function getPeopleList(params) {
  return request({
    url: '/vue-admin-template/people/list',
    method: 'get',
    params
  })
}
