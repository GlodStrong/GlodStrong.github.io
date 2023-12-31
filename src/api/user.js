import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/glodstrong.github.io/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/glodstrong.github.io/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/glodstrong.github.io/user/logout',
    method: 'post'
  })
}
