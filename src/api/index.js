import request from '@/utils/request'
import config from '@/config'
// var host = 'http://39.104.201.236:9014/'

// user 相关的url
const urlMap = {
  category_treeList: '/category/treeList',
  article_page: '/article/page',
  article_detail: '/article/detail'
}
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
  urlMap[key] = config.BASE_API + urlMap[key]
})

export function getCategoryList (params) {
  return request({
    url: urlMap['category_treeList'],
    method: 'get',
    params
  })
}

export function articlePage (data) {
  return request({
    url: urlMap['article_page'],
    method: 'post',
    data
  })
}
export function articleDetail (data) {
  return request({
    url: urlMap['article_detail'],
    method: 'post',
    data
  })
}
